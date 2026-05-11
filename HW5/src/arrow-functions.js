export const addElementsArrow = (elements) => {
    if (elements.length === 0) return;

    const initial = getInitialValueByType(typeof elements[0]);

    return elements.reduce((sum, element) => sum + element, initial);
};

const getInitialValueByType = (type) => type === 'number' ? 0 : '';
