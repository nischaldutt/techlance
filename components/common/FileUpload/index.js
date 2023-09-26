import { useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { Upload } from "antd";

import { deleteFile } from "@/services";

// todo: fix the isUploading status to indicate multiple uploads status
// currently it indicates only single upload status
export default function FileUpload({
  images = [],
  uploadUrl,
  limit,
  getUploadedFiles,
}) {
  const [fileList, setFileList] = useState(images);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = (response) => {
    const isUploading = false;
    setFileList(response?.fileList);

    switch (response?.file?.status) {
      case "uploading": {
        isUploading = true;
        break;
      }
      case "done": {
        isUploading = false;
        break;
      }
      case "removed": {
        const { fileId, fileName } = response?.file?.response?.data;
        deleteFile({ fileId, fileName });
        isUploading = false;
        break;
      }
      default: {
        isUploading = false;
      }
    }

    const payload = response?.fileList?.map(({ response }) => {
      return {
        fileId: response?.data?.fileId,
        fileName: response?.data?.fileName,
      };
    });

    getUploadedFiles(payload, isUploading);
  };

  const uploadButton = (
    <div>
      <BsPlusCircleDotted className="text-xl ml-auto mr-auto" />
      <div className="mt-2">Upload</div>
    </div>
  );

  return (
    <section>
      <Upload
        action={uploadUrl}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        showUploadList={{ showPreviewIcon: false }}
      >
        {fileList.length >= limit ? null : uploadButton}

        {/* <Image src={previewImage} alt="" layout="fill" preview={false} /> */}
      </Upload>
    </section>
  );
}

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
