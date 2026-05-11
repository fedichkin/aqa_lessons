const day = 3;
const command = 'start';

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day number');
}

switch (command) {
    case 'start':
        console.log('Starting the process...');
        break;
    case 'stop':
        console.log('Stopping the process...');
        break;
    case 'pause':
        console.log('Pausing the process...');
        break;
    case 'restart':
        console.log('Restarting the process...');
        break;
    default:
        console.log('Unknown command:', command);
}
