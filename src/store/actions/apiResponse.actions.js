import {
    OPEN_RESPONSE_MODAL,
    CLOSE_RESPONSE_MODAL,
    OPEN_CONFIRMATION_MODAL,
    CLOSE_CONFIRMATION_MODAL,
    CLEAR_CONFIRMATION_MODAL,
    OPEN_TOASTER,
    CLOSE_TOASTER,
} from '../constants';

export const openResponseModal = data => ({
    type: OPEN_RESPONSE_MODAL,
    payload: data,
});

export const closeResponseModal = () => ({
    type: CLOSE_RESPONSE_MODAL,
});

export const openConfirmationModal = (action, callback, apiName) => {
    const createConfirmationContent = action => {
        switch (action) {
            case 'save': {
                return {
                    message: 'Are you sure you want to save?',
                    status: 'save',
                    title: 'Save',
                    onConfirm: callback,
                };
            }
            case 'update': {
                return {
                    apiName,
                    message: 'Are you sure you want to update?',
                    status: 'update',
                    title: 'Update',
                    onConfirm: callback,
                };
            }
            case 'delete': {
                return {
                    message: 'Are you sure you want to delete? This can\'t be undone',
                    status: 'delete',
                    title: `Delete ${apiName ? apiName + '?' : ''}`,
                    apiName: apiName,
                    onConfirm: callback,
                };
            }
        }
    };

    return {
        type: OPEN_CONFIRMATION_MODAL,
        payload: createConfirmationContent(action),
    };
};

export const closeConfirmationModal = () => ({
    type: CLOSE_CONFIRMATION_MODAL,
});

export const clearConfirmationModal = () => ({
    type: CLEAR_CONFIRMATION_MODAL,
});

export const showToaster = () => ({
    type: OPEN_TOASTER,
});

export const closeToaster = () => ({
    type: CLOSE_TOASTER,
});