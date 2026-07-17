import {setDefaultTimeout, setWorldConstructor} from '@cucumber/cucumber';
import {AtenaBooksWorld} from './worlds/atena-books.world';

setDefaultTimeout(999999999);
setWorldConstructor(AtenaBooksWorld);
