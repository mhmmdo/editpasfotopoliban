import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { useState } from "react"
import { Image } from "types"
import Editor from "components/Editor"
import { SAMPLE_IMAGE } from "data/editor"

const Dropzone = () => {
  const [image, setImage] = useState<Image[]>([])

  const onDropAccepted = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.map((file: File, index: number) => {
      const reader: FileReader = new FileReader()
      reader.onabort = () => console.log("Pembacaan foto dibatalkan")
      reader.onerror = () => console.log("Pembacaan foto gagal")
      reader.onload = () => {
        setImage((prev) => [
          ...prev,
          { id: index, src: reader.result?.toString(), name: file.name },
        ])
      }
      reader.readAsDataURL(file)
      return file
    })
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"],
    },
    maxFiles: 1,
    onDropAccepted: onDropAccepted,
  })

  return (
    <section className="h-min my-[100px] mx-auto">
      <aside
        className={`border-opacity-25 border-[2px] p-[25px] text-white ${
          isDragAccept ? "border-opacity-100 border-solid" : "border-dashed"
        } ${
          isDragReject
            ? "border-red-900 border-opacity-100 !text-red-900 hover:!cursor-no-drop border-solid"
            : "border-white border-solid"
        }`}
      >
        {image.length > 0 ? (
          <>
            <Editor image={image} resetImage={setImage} />
          </>
        ) : (
          <>
            <div {...getRootProps({ className: "dropzone" })}>
              <input
                {...getInputProps()}
                className={`${isDragReject ? "cursor-not-allowed" : ""}`}
              />
              {isDragAccept && <p>Foto dapat diunggah</p>}
              {isDragReject && (
                <p>Hanya mendukung jenis file .png, .jpg, dan .jpeg.</p>
              )}
              {!isDragActive && (
                <p>Tarik atau klik untuk unggah foto (.png, .jpg, dan .jpeg)</p>
              )}
            </div>
            <button
              onClick={() => setImage(SAMPLE_IMAGE)}
              className="my-5 opacity-50"
            >
              sample
            </button>
          </>
        )}
      </aside>
    </section>
  )
}

export default Dropzone
