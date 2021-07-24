﻿importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//迟缓
function OnAdd(fightsystem, self, buff, fv, timer)
{
    buff.LifeTime = buff.SaveData;
    var BuffZaiShengGuangHuan0 = fightsystem.GetBuff(self,11861);
    var BuffZaiShengGuangHuan1 = fightsystem.GetBuff(self,11862);
    var BuffZaiShengGuangHuan2 = fightsystem.GetBuff(self,11863);
    if(BuffZaiShengGuangHuan0 != null)
    {
        buff.LifeTime = LogicTool.ToInt(buff.LifeTime*(100-BuffZaiShengGuangHuan0.SaveData%100)*0.01);
        fightsystem.AddBuff(self,11888,timer,fv);
    }
    else if(BuffZaiShengGuangHuan1 != null)
    {
        buff.LifeTime = LogicTool.ToInt(buff.LifeTime*(100-BuffZaiShengGuangHuan1.SaveData%100)*0.01);
        fightsystem.AddBuff(self,11888,timer,fv);
    }
    else if(BuffZaiShengGuangHuan2 != null)
    {
        buff.LifeTime = LogicTool.ToInt(buff.LifeTime*(100-BuffZaiShengGuangHuan2.SaveData%100)*0.01);
        fightsystem.AddBuff(self,11888,timer,fv);
    }
    var SlowRate = 50*(1+0.01*LogicTool.ToInt(buff.SaveData1*0.01));
    fightsystem.ChangeAtkTime(self,self.AtkTimeMul-SlowRate,self.AtkTimeAdd);
    buff.SaveData1 = SlowRate;
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
    fightsystem.ChangeAtkTime(self,self.AtkTimeMul+buff.SaveData1,self.AtkTimeAdd);
}