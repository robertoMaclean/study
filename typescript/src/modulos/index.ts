import * as G from './group';
import { Point } from './Point';
import { Animales, Chanchitos, Caballos } from './Animales';

console.log(Animales, Chanchitos, Caballos);
const point = new Point(1, 2);
const group = new G.default(1, 'Grupo 1');
console.log(G.defaultGroups.admin);

