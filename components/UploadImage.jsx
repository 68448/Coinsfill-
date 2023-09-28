import { useEffect, useRef, useState } from "react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import Button from "@/UI/Button";
import Title from "@/UI/Title";
import putImage from "@/requests/putImage";
import axios from "axios";

const styles = {
    uploadImageText: 'text-[14px] text-[#1E1E2E] max-w-[200px] mb-[43px]',
    chooseFileLabel: "rounded-[50px] bg-gradient-to-r from-[#4834D4] from-[4.95%] to-[#686DE0] to-[93.62%] px-[98px] pt-[16px] pb-[18px] text-center text-[14px] font-bold leading-normal text-white mb-[20px] w-full cursor-pointer"
    
   
}


const UploadImage = (props) => {

    const [fileInput, setFileInput] = useState();
    const [hasInput, setHasInput] = useState(false);
    const [croppedImage, setCroppedImage] = useState();
    const [fileName, setFileName] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    const dialogRef = useRef(null);
    const cropperRef = useRef(null);

    useEffect(() => {
        const userData = localStorage.getItem('userData')
        const userJSON = JSON.parse(userData)
        if(userJSON.token){
            const getImage = async (token) => {
                const CONFIG = {
                    headers: {
                      'token-tt': token,
                    },
                  }
                try{
                    const URL = 'https://test-task.test211.workers.dev'
                    const response = await axios.get(URL + '/account/image', CONFIG)
                    if(response.status === 200){
                        await setCroppedImage(response.data.image)
                    }
                }catch(e){
                    console.log(e);
                }              
            };
            getImage(userJSON.token)
        }

    }, [])

    function getBase64(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          setFileInput(reader.result);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };

        return reader.result;
    }

    const handleFile = async(e) => {
        const file = e.currentTarget.files[0];
        if(props.sizeLimit && file.size > props.sizeLimit)
        {
            setStatusMessage("Файл слишком большой");
        }
        else
        {
            setFileName(file.name);
            getBase64(file);
        }
        
    }

    const clearFileInput = () => {
        setHasInput(false);
        setFileInput(null);
        setCroppedImage(null);
        setFileName("");
    }

    const saveImage = async () => {
        setCroppedImage(croppedImage);
        
        
        const userData = localStorage.getItem('userData')
        const userJSON = JSON.parse(userData)
        if(userJSON.token){
            const response = await putImage(croppedImage, userJSON.token)
            if(response.ok){
                setStatusMessage("Изображение сохранено");
            }else{
                setStatusMessage("Ошибка загрузки фото");

            }
        }
        

    }

    const dropHandler = (ev) => {
        console.log("Файл(ы) удалены");
        
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        
        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            [...ev.dataTransfer.items].forEach((item, i) => {
            if (item.kind === "file" && (item.type === "image/png" || item.type === "image/gif" || item.type === "image/jpg" || item.type === "image/jpeg")) {
                const file = item.getAsFile();
                if(props.sizeLimit && file.size > props.sizeLimit)
                {
                    setStatusMessage("Файл слишком большой");
                }
                else
                {
                    console.log(`… file[${i}].name = ${file.name}`);
                    setFileName(file.name);
                    getBase64(file);
                }
                
            }
            else
            {
                setStatusMessage("Invalid file type.");
            }
            });
        } else {
            // Use DataTransfer interface to access the file(s)
            [...ev.dataTransfer.files].forEach((file, i) => {
                console.log(`… file[${i}].name = ${file.name}`);
            });
        }
    }

    const dragOverHandler = (ev) => {
        console.log("Файл выбран");
        ev.preventDefault();
    }
      

    useEffect(() => {
        setHasInput(fileInput !== null);
        showEditor();
    }, [fileInput])

    useEffect(() => {
        setTimeout(() => {
            setStatusMessage("");
        }, 2000);
    }, [statusMessage])


    const showEditor = () => {
        if(fileInput) dialogRef.current?.showModal();
    }

    const onCrop = () => {
        const cropper = cropperRef.current?.cropper;
        // console.log(cropper.getCroppedCanvas().toDataURL());
        setCroppedImage(cropper.getCroppedCanvas().toDataURL());
        dialogRef.current?.close();
    };    

    return (
        <div>
            {!croppedImage ? <Title text='Загрузка аватара' marginB='mb-[37px]'/> : <Title text='Фото для аватарки' marginB='mb-[37px]'/>}
            {!croppedImage && <p className={styles.uploadImageText}>Загрузите файл размером до 5Мб По формату: JPG, PNG, GIF</p>}                   
            {croppedImage && 
            <div id="img-display" >
                <div className="imageShow py-[15px] bg-[#F3F5F5] w-full flex justify-center">
                    <img id={props.round ? "round" : ""} src={croppedImage} className="max-w-[170px] max-h-[170px]"/>
                </div>
                
                <div id="options-row" className="flex flex-col gap-[10px] mt-[32px]">
                    <Button title='Сохранить' buttonStyle='blue' type='click' onClick={() => saveImage()}/>
                    <Button title='Отменить' type='click' buttonStyle='gray' textColor="#1E1E2E" onClick={() => {clearFileInput()}}/>
                </div>
            </div>
            }
            <div id="drop-zone" className="flex" onDrop={() => dropHandler(event)} onDragOver={() => dragOverHandler(event)}>
                {!croppedImage &&    
                <>                
                    <label 
                    htmlFor="image-input"
                    className={styles.chooseFileLabel}
                    >
                        Выбрать файл
                    </label>
                    <input 
                    id="image-input" 
                    className="absolute opacity-0 z-10"
                    type="file" 
                    accept=".png,.jpg,.gif" 
                    onInput={(e) => {handleFile(e)}} 
                    />
                </>            
                }
            </div>
            {statusMessage && <p id="status-msg" className="text-[12px] text-coinBlack w-full text-center">{statusMessage}</p>}
            <div className="relative">
                <dialog ref={dialogRef} id="editor">
                    <div id={props.round ? "round" : "rect"}>
                        <Cropper
                            src={fileInput}
                            style={{height: 360, width: 360}}
                            initialAspectRatio={props.aspect}
                            aspectRatio={props.aspect}
                            guides={false}
                            ref={cropperRef}
                        />
                    </div>
                    <div id="editor-button-row">
                        <button id="crop-button" onClick={onCrop}>Crop</button>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default UploadImage;