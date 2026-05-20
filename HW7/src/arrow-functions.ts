export const addElementsArrow = (elements: string[] | number[]): string | number | undefined => {
    if (elements.length === 0) return;

    if (typeof elements[0] === 'number') {
        return (elements as number[]).reduce((sum, element) => sum + element, 0);
    }

    return (elements as string[]).reduce((sum, element) => sum + element, '');
};
