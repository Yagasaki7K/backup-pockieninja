importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//宠物主动
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    return UserSkillReturn.SKILL_LOSE;
}