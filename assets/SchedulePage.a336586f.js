import{o as a,c as r,F as o,z as l,a as t,t as s,n as c}from"./index.ddff012a.js";const i={class:"flex flex-col gap-y-8 gap-x-32 xl:flex-row"},b={class:"h-0 text-center xl:w-1/2"},_={class:"text-white"},h=t("th",{class:"border bg-opacity-40 bg-etml border-etml",colspan:"2"}," Horaire ",-1),p={class:"uppercase border bg-etml border-etml",colspan:"2"},u=t("tr",{class:"text-left align-top"},[t("td",{class:"w-16 px-1 text-sm font-bold border text-etml border-etml"}," de "),t("td",{class:"w-16 px-1 text-sm font-bold border text-etml border-etml"}," \xE0 "),t("td",{class:"border border-etml"},"\xA0"),t("td",{class:"w-16 text-sm font-bold text-center border bg-opacity-40 bg-etml text-etml border-etml"}," salle ")],-1),x={class:"w-16 border border-etml"},S={class:"w-16 border border-etml"},g={class:"px-1 text-left border border-etml"},f={class:"w-16 border bg-opacity-40 bg-etml border-etml"},y=t("tr",null,[t("td",{colspan:"4",class:"text-sm font-bold text-left text-etml"},[t("a",{href:"https://www.portail.vd.ch/formation/hyperplanning/etml/invite",target:"_blank",class:"hover:underline"}," Hyperplanning ")])],-1),A={__name:"SchedulePage",setup(w){const n=[[{start:"08:00",end:"08:45",matter:"Histoire",classroom:"S312"},{start:"08:50",end:"09:35",matter:"Histoire",classroom:"S312"},{start:"09:50",end:"10:35",matter:"\xC9conomie",classroom:"S312"},{start:"10:40",end:"11:25",matter:"\xC9conomie",classroom:"S312"},{start:"11:30",end:"12:15",matter:"",classroom:""},{start:"12:20",end:"13:05",matter:"Fran\xE7ais",classroom:"S312"},{start:"13:10",end:"13:55",matter:"Math\xE9matiques",classroom:"S312"},{start:"14:00",end:"14:45",matter:"Math\xE9matiques",classroom:"S312"},{start:"15:00",end:"15:45",matter:"Anglais",classroom:"S312"},{start:"15:50",end:"16:35",matter:"Anglais",classroom:"S312"}],[{start:"08:00",end:"08:45",matter:"Fran\xE7ais",classroom:"S312"},{start:"08:50",end:"09:35",matter:"Fran\xE7ais",classroom:"S312"},{start:"09:50",end:"10:35",matter:"Math\xE9matiques",classroom:"S312"},{start:"10:40",end:"11:25",matter:"Math\xE9matiques",classroom:"S312"},{start:"11:30",end:"12:15",matter:"Math\xE9matiques",classroom:"S312"},{start:"12:20",end:"13:05",matter:"",classroom:""},{start:"13:10",end:"13:55",matter:"Histoire",classroom:"S312"},{start:"14:00",end:"14:45",matter:"Physique",classroom:"S416"},{start:"15:00",end:"15:45",matter:"Physique",classroom:"S416"},{start:"15:50",end:"16:35",matter:"Allemand",classroom:"S312"},{start:"16:40",end:"17:25",matter:"Appuis math\xE9matiques",classroom:"S312",optional:!0},{start:"17:30",end:"18:15",matter:"Rattrapages tests",classroom:"",optional:!0}]];return(H,M)=>(a(),r("div",i,[(a(),r(o,null,l(n,(m,d)=>t("table",b,[t("tr",_,[h,t("th",p,s(["Lundi","Vendredi"][d]),1)]),u,(a(!0),r(o,null,l(m,e=>(a(),r("tr",{class:c({"bg-neutral-200":e.optional})},[t("td",x,s(e.start),1),t("td",S,s(e.end),1),t("td",g,s(e.matter),1),t("td",f,s(e.classroom),1)],2))),256)),y])),64))]))}};export{A as default};