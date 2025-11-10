import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faDownload,
  faTrashAlt,
  faFileUpload,
  faPaperPlane,
  faAngleRight,
  faAngleLeft,
  faRobot,
  faAngleDown,
  faSearch,
  faDoorOpen,
  faFolderOpen,
  faLineChart,
  faFileAlt,
  faHome,
  faFileDownload,
  faEye,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

import ChatbotIcon from "@/assets/icons/chatbot.svg?react";

import ChatIcon from "@/assets/icons/chat.svg?react";
import SendIcon from "@/assets/icons/send-icon.svg?react";

const Icons = {
  ArrowsRotate: (props: any) => (
    <FontAwesomeIcon icon={faArrowsRotate} {...props} />
  ),
  Download: (props: any) => <FontAwesomeIcon icon={faDownload} {...props} />,
  TrashAlt: (props: any) => <FontAwesomeIcon icon={faTrashAlt} {...props} />,
  FileUpload: (props: any) => (
    <FontAwesomeIcon icon={faFileUpload} {...props} />
  ),
  PaperPlane: (props: any) => (
    <FontAwesomeIcon icon={faPaperPlane} {...props} />
  ),
  AngleRight: (props: any) => (
    <FontAwesomeIcon icon={faAngleRight} {...props} />
  ),
  AngleLeft: (props: any) => <FontAwesomeIcon icon={faAngleLeft} {...props} />,
  Robot: (props: any) => <FontAwesomeIcon icon={faRobot} {...props} />,
  AngleDown: (props: any) => <FontAwesomeIcon icon={faAngleDown} {...props} />,
  Search: (props: any) => <FontAwesomeIcon icon={faSearch} {...props} />,
  DoorOpen: (props: any) => <FontAwesomeIcon icon={faDoorOpen} {...props} />,
  FolderOpen: (props: any) => (
    <FontAwesomeIcon icon={faFolderOpen} {...props} />
  ),
  LineChart: (props: any) => <FontAwesomeIcon icon={faLineChart} {...props} />,
  FileAlt: (props: any) => <FontAwesomeIcon icon={faFileAlt} {...props} />,
  Home: (props: any) => <FontAwesomeIcon icon={faHome} {...props} />,
  FileDownload: (props: any) => (
    <FontAwesomeIcon icon={faFileDownload} {...props} />
  ),
  Eye: (props: any) => <FontAwesomeIcon icon={faEye} {...props} />,
  Close: (props: any) => <FontAwesomeIcon icon={faClose} {...props} />,
  Chatbot: ChatbotIcon,
  Chat: ChatIcon,
  Send: SendIcon,
};

export { Icons };
export default Icons;
