export const warnIcon = (event) => {
    const mainId = event.target.parentElement.id;
    const deleteElement = document.querySelector(`#delete_${mainId}`);
    const revertElement = document.querySelector(`#revert_${mainId}`);
    const warnElement = document.querySelector(`#warn_${mainId}`);

    warnElement.classList.add('makeInvisible');
    revertElement.classList.remove('makeInvisible');
    deleteElement.classList.remove('makeInvisible');
};
export const revertIcon = (event) => {
    const mainId = event.target.parentElement.id;
    const deleteElement = document.querySelector(`#delete_${mainId}`);
    const revertElement = document.querySelector(`#revert_${mainId}`);
    const warnElement = document.querySelector(`#warn_${mainId}`);

    warnElement.classList.remove('makeInvisible');
    revertElement.classList.add('makeInvisible');
    deleteElement.classList.add('makeInvisible');

};