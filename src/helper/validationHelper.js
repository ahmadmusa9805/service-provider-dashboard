import { message } from 'antd';


class ValidationHelper {

    // Method for error toast
    errorToast(messages) {
        message.error(messages)
    }

    // Method for success toast
    successToast(messages) {
        message.success(messages);
    }
}

export const {errorToast, successToast} = new ValidationHelper();
