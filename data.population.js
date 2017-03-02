/**
 * Created by Andi on 12.02.2017.
 */

var population={
    HARVESTER:_.filter(Game.creeps, {memory: {role:'harvester'}}),
    CONSTRUCTOR: _.filter(Game.creeps, {memory:{role:'constructor'}}),
    UPGRADER:_.filter(Game.creeps, {memory: {role:'upgrader'}})
}

module.exports=population;
