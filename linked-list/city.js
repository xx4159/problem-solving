import { LList } from './index.js';

const cities = new LList();
cities.insert('Conway', 'head');
cities.insert('Russelville', 'Conway');
cities.insert('Alma', 'Russelville');
cities.display();
cities.remove('Conway');
cities.display();

