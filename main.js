var roleHarvester= require("role.harvester");
var creepBuilder= require('factory.creepBuilder');
var helper= require('helperFunctions');


module.exports.loop = function () {

    var help= new helper;
    var creepBuild= new creepBuilder;

    creepBuild.buildHarvester();
    creepBuild.buildConstructor();

    for (let name in Game.creeps) {

        var creep = Game.creeps[name];
        roleHarvester.run(creep);

    }
    help.garbageCreeps();
};