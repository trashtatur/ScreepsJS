/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('factory.creepBuilder');
 * mod.thing == 'a thing'; // true
 */
var population=require('data.population');
var template=require('template.roles');

    var creepBuilder= function() {

    };

    creepBuilder.prototype.buildHarvester=function() {
        if (population.HARVESTER.length < Game.spawns.Spawn1.room.find(FIND_SOURCES).length) {
            Game.spawns.Spawn1.createCreep(template.HARVESTER_STAT,undefined, {role: 'harvester'});
        }
    };
    
    creepBuilder.prototype.buildConstructor=function () {

        if (Game.spawns.Spawn1.room.find(FIND_CONSTRUCTION_SITES).length!=0 &&
            population.CONSTRUCTOR.length<=2) {

            Game.spawns.Spawn1.createCreep(template.HARVESTER_STAT,undefined, {role: 'constructor'});
        }

    };

    creepBuilder.prototype.buildUpgrader=function () {
        if (population.UPGRADER.length<=3) {
            Game.spawns.Spawn1.createCreep(template.HARVESTER_STAT, undefined, {role: 'upgrader'});
        }
    };

module.exports=creepBuilder;





