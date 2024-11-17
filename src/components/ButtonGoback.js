import { TouchableOpacity } from "react-native"
import GoBackArrowIcon from "../../icons/GoBackArrowIcon"

const GobackButton = ({ onPress }) => {
    return <TouchableOpacity onPress={onPress}>
        <GoBackArrowIcon />
    </TouchableOpacity>
}
export default GobackButton;