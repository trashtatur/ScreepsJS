/**
 * Created by Andi on 11.02.2017.
 */

var population = require('data.population');

module.exports ={
    run : function (creep) {
        creep.memory.harvesting=false;
        if (creep.memory.harvesting == false && creep.carry.energy == 0) {
            creep.memory.harvesting = true;
        }
        else if ( creep.memory.harvesting == true && creep.carry.energy==creep.carryCapacity) {
            creep.memory.working=false;
            creep.drop(RESOURCE_ENERGY,creep.carryCapacity);
        }

        if (creep.memory.harvesting == true) {

            var canWorkOn=null;

            if (creep.memory.worksOn==undefined) {
                var roomSources=Game.rooms[creep.room].find(FIND_SOURCES);

                for (var source in roomSources) {


                    if (!canWorkOn) { // if the var is false then set it to null again and repeat the cycle

                        canWorkOn=null;

                    } else if (canWorkOn) {

                        creep.memory.worksOn=source.id; //set this source as the one the creep should work on
                        break; // end the loop, a source was found

                    }

                    for (let harvester in population.HARVESTER) {

                        if (harvester.memory.worksOn==source.id) { //it only continues if the var is not already false

                            canWorkOn = false; //this source is already claimed, thus the var switches to false

                        }
                    }

                    if (canWorkOn==null) {

                        canWorkOn=true; //if the var wasnt set to false it should still be null, thus it can be set to true

                    }
                            //TODO See if you can simplify this clusterfuck...
                }

            }

            else {
                if (creep.harvest(Game.getObjectById(creep.worksOn)) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(Game.getObjectById(creep.worksOn));
                }
            }

        }
    }
};
