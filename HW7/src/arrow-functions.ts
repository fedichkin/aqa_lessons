interface AddElementsArrow {
    (elements: string[]): string | undefined;
    (elements: number[]): number | undefined;
}

export const addElementsArrow = ((elements: string[] | number[]): string | number | undefined => {
    if (elements.length === 0) return;

    const initial = getInitialValueByType(typeof elements[0]);

    return (elements as number[]).reduce((sum, element) => sum + element, initial as number);
}) as AddElementsArrow;

const getInitialValueByType = (type: string): string | number => type === 'number' ? 0 : '';
