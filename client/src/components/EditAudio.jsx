import FilePicker from "./FilePicker";
import { AiOutlineSave } from "react-icons/ai";

function EditAudio({ closeEditing }) {
  const handleSave = () => {
    closeEditing();
  };

  return (
    <>
      <FilePicker />
      <AiOutlineSave
        onClick={handleSave}
        size={40}
        className="ml-6 bg-gray-200 p-1 rounded-md cursor-pointer hover:bg-gray-300"
      />
    </>
  );
}

export default EditAudio;
