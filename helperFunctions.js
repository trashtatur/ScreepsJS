/**
 * Created by Andi on 12.02.2017.
 */

var helperFunctions= function() {

};

helperFunctions().prototype.garbageCreeps=function() {

    for (var name in Memory.creeps) {
        if (!Game.creeps.contains(name)) {
            delete Memory.creeps[name];
        }

    }
};

module.exports=helperFunctions;
