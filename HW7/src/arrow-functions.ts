export const addElementsArrow = ((elements: string[] | number[]): string | number | undefined => {
    if (elements.length === 0) return;

    const initial = getInitialValueByType(typeof elements[0]);

    return (elements as number[]).reduce((sum, element) => sum + element, initial as number);
});

const getInitialValueByType = (type: string): string | number => type === 'number' ? 0 : '';
