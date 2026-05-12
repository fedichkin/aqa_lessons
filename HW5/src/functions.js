export function addElements(elements) {
    if (elements.length === 0) return;

    const initial = getInitialValueByType(typeof elements[0]);

    return elements.reduce((sum, element) => sum + element, initial);
}

function getInitialValueByType(type) {
    return type === 'number' ? 0 : '';
}
