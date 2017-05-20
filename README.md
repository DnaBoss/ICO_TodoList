# ICO_TodoList
練習使用React 建立 TodoList
在終端機輸入以下四列指令
(需先安裝 node.js 及 git)

git clone git@github.com:DnaBoss/ICO_TodoList.git

git checkout feature/controllable 

npm install live-server

live-server

即自動開啟網頁

http://127.0.0.1:8080/
# 百家桌

| 參數名稱 | 格式 | 說明 |
| --- | --- | --- |
| active | string | Y: 線上賭桌N: 未使用(預設值) |
| big\_rate | string |   |
| bkr\_no\_comm\_rate | string |   |
| bkr\_pair\_rate | string |   |
| bkr\_rate | string |   |
| boots | string |   |
| current\_game\_id | string |   |
| dealer | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| dealer\_id | string |   |
| enable\_streams | boolen |   |
| enus\_desc | string |   |
| enus\_name | string |   |
| error | string | 錯誤代碼 |
| game\_time | string |   |
| heart\_beat | string |   |
| history | array | [HISTORY(遊戲歷程)(非必填)](https://docs.google.com/document/d/11o8UuEAxYAZhSNkvJQ0SC0YZ6sd1sdwLRB5j5F6lN88/edit#heading=h.4jdd7ch8jsgw) |
| host\_id | string |   |
| limit | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| live\_state | string |   |
| lobby\_id | string |   |
| maintenance | boolen |   |
| max\_big\_chip | string |   |
| max\_bkr\_chip | string |   |
| max\_bkr\_no\_comm\_chip | string |   |
| max\_bkr\_pair\_chip | string |   |
| max\_chip | string |   |
| max\_plr\_chip | string |   |
| max\_plr\_pair\_chip | string |   |
| max\_small\_chip | string |   |
| max\_tie\_chip | string |   |
| min\_chip | string |   |
| name | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| plr\_pair\_rate | string |   |
| plr\_rate | string |   |
| small\_rate | string |   |
| sn | string |   |
| status | string | [基礎定義](https://docs.google.com/spreadsheets/d/1_96YIQb-QvVk9HuOS1LQofNFhrWCCOlHHh-7LYUcvps/edit#gid=0) |
| streams | array |   |
| table\_id | string |   |
| tie\_rate | string |   |
| zhcn\_desc | string |   |
| zhcn\_name | string |   |
| zhtw\_desc | string |   |
| zhtw\_name | string |   |







#

# 龍虎桌

| 參數名稱 | 格式 | 說明 |
| --- | --- | --- |
| active | string |   |
| boots | string |   |
| current\_game\_id | string |   |
| dealer | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| dealer\_id | string |   |
| dragon\_rate | string |   |
| enable\_streams | boolen |   |
| enableStreams | string |   |
| enus\_desc | string |   |
| enus\_name | string |   |
| error | string |   |
| game\_time | string |   |
| heart\_beat | string |   |
| history | array | [HISTORY(遊戲歷程)(非必填)](https://docs.google.com/document/d/11o8UuEAxYAZhSNkvJQ0SC0YZ6sd1sdwLRB5j5F6lN88/edit#heading=h.4jdd7ch8jsgw) |
| host\_id | string |   |
| limit | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| live\_state | boolen |   |
| lobby\_id | string | 大廳id |
| maintenance | boolen | true:維護中
false:使用中 |
| max\_chip | string |   |
| max\_dragon\_chip | string | 最大龍限額 |
| max\_tie\_chip | string | 最大合限額 |
| max\_tiger\_chip | string | 最大虎限額 |
| min\_chip | string |   |
| name | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| sn | string |   |
| squint\_time | string | 瞇牌時間 |
| status | string | [基礎定義](https://docs.google.com/spreadsheets/d/1_96YIQb-QvVk9HuOS1LQofNFhrWCCOlHHh-7LYUcvps/edit#gid=0) |
| streams | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| table\_id | string |   |
| tie\_rate | string |   |
| tiger\_rate | string |   |



























# 龍寶桌

| 參數名稱 | 格式 | 說明 |
| --- | --- | --- |
| active | string |   |
| big\_rate | string |   |
| bkr\_dg\_rate | string | 龍賠率 |
| bkr\_no\_comm\_rate | string | 莊免佣賠率 |
| bkr\_pair\_rate | string | 莊對賠率 |
| bkr\_rate | string | 莊賠率 |
| boots | string | 靴號 |
| current\_game\_id | string | 當前遊戲局號 |
| dealer | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| dealer\_id | string | 荷官編號 |
| enable\_streams | boolen | true:視訊開啟false:視訊關閉 |
| enus\_desc | string |   |
| enus\_name | string |   |
| error | string |   |
| game\_time | string |   |
| heart\_beat | string |   |
| history | array | [HISTORY(遊戲歷程)(非必填)](https://docs.google.com/document/d/11o8UuEAxYAZhSNkvJQ0SC0YZ6sd1sdwLRB5j5F6lN88/edit#heading=h.4jdd7ch8jsgw) |
| host\_id | string |   |
| limit | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| live\_state | string |   |
| lobby\_id | string |   |
| maintenance | boolen |   |
| max\_big\_chip | string | 限額 |
| max\_bkr\_chip | string | 最大莊限額 |
| max\_bkr\_dg\_chip | string | 最大莊龍寶限額 |
| max\_bkr\_no\_comm\_chip | string |   |
| max\_bkr\_pair\_chip | string |   |
| max\_chip | string |   |
| max\_plr\_chip | string |   |
| max\_plr\_dg\_chip | string |   |
| max\_plr\_pair\_chip | string |   |
| max\_small\_chip | string |   |
| max\_tie\_chip | string |   |
| min\_chip | string |   |
| name | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| plr\_dg\_rate | string |   |
| plr\_pair\_rate | string |   |
| plr\_rate | string |   |
| small\_rate | string |   |
| sn | string | 桌編號 |
| squint\_time | string |   |
| status | string | [基礎定義](https://docs.google.com/spreadsheets/d/1_96YIQb-QvVk9HuOS1LQofNFhrWCCOlHHh-7LYUcvps/edit#gid=0) |
| streams | array |   |
| table\_id | string |   |
| tie\_rate | string |   |
| zhcn\_desc | string |   |
| zhcn\_name | string |   |
| zhtw\_desc | string |   |
| zhtw\_name | string |   |







# 骰寶桌

| 參數名稱 | 格式 | 說明 |
| --- | --- | --- |
| active | string |   |
| any\_triple\_rate | string |   |
| big\_rate | string | 大賠率 |
| current\_game\_id | string |   |
| dealer | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| dealer\_id | string |   |
| enable\_streams | boolen |   |
| enus\_desc | string |   |
| enus\_name | string |   |
| error | string |   |
| even\_rate | string | 雙賠率 |
| game\_time | string |   |
| heart\_beat | string |   |
| history | array | [HISTORY(遊戲歷程)(非必填)](https://docs.google.com/document/d/11o8UuEAxYAZhSNkvJQ0SC0YZ6sd1sdwLRB5j5F6lN88/edit#heading=h.4jdd7ch8jsgw) |
| host\_id | string |   |
| limit | array |   |
| live\_state | string |   |
| lobby\_id | string |   |
| maintenance | boolen |   |
| max\_any\_triple\_chip | string | 豹子限額 |
| max\_big\_chip | string | 大限額 |
| max\_chip | string |   |
| max\_even\_chip | string | 雙限額 |
| max\_odd\_chip | string | 單限額 |
| max\_pair\_chip | string | 兩顆骰限額 (對子) |
| max\_single\_dice\_chip | string | 一個符合限額 |
| max\_small\_chip | string | 小限額 |
| max\_total\_10\_chip | string | 總和10限額 |
| max\_total\_11\_chip:string | string | 總和11限額 |
| max\_total\_12\_chip | string | 總和12限額 |
| max\_total\_13\_chip | string | 總和13限額 |
| max\_total\_14\_chip | string | 總和14限額 |
| max\_total\_15\_chip | string | 總和15限額 |
| max\_total\_16\_chip | string | 和16限額 |
| max\_total\_17\_chip | string | 和17限額 |
| max\_total\_4\_chip | string | 總和4限額 |
| max\_total\_5\_chip | string | 總和5限額 |
| max\_total\_6\_chip | string | 總和6限額 |
| max\_total\_7\_chip | string | 總和7限額 |
| max\_total\_8\_chip | string | 總和8限額 |
| max\_total\_9\_chip | string | 總和9限額 |
| max\_triple\_chip | string | 圍骰限額 |
| max\_two\_dice\_chip | string | 兩個符合限額 |
| min\_chip | string |   |
| name | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| odd\_rate | string |   |
| pair\_rate | string |   |
| single\_dice\_rate | string |   |
| small\_rate | string |   |
| sn | string |   |
| status | string | [基礎定義](https://docs.google.com/spreadsheets/d/1_96YIQb-QvVk9HuOS1LQofNFhrWCCOlHHh-7LYUcvps/edit#gid=0) |
| streams | array |   |
| table\_id | string |   |
| total\_10\_rate | string | 總和10賠率 |
| total\_11\_rate | string | 總和11賠率 |
| total\_12\_rate | string | 總和12賠率 |
| total\_13\_rate | string | 總和13賠率 |
| total\_14\_rate | string | 總和14賠率 |
| total\_15\_rate | string | 總和15賠率 |
| total\_16\_rate | string | 和16賠率(05030) |
| total\_17\_rate | string | 和17賠率(05031) |
| total\_4\_rate | string | 總和4賠率 |
| total\_5\_rate | string | 總和5賠率 |
| total\_6\_rate | string | 總和6賠率 |
| total\_7\_rate | string | 總和7賠率 |
| total\_8\_rate | string | 總和8賠率 |
| total\_9\_rate | string | 總和9賠率 |
| triple\_rate | string | 圍骰賠率 |
| two\_dice\_rate | string | 兩個符合賠率 |
| zhcn\_desc | string |   |
| zhcn\_name | string |   |
| zhtw\_desc | string |   |
| zhtw\_name | string |   |











# 歐式輪盤桌

| 參數名稱 | 格式 | 說明 |
| --- | --- | --- |
| active | string | Y: 線上賭桌N: 未使用(預設值) |
| big\_rate | number |   |
| black\_rate | number |   |
| column\_rate | number |   |
| corner\_rate | number |   |
| current\_game\_id | string |   |
| dealer | Object | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| dealer\_id | string |   |
| dozen\_rate | number |   |
| enable\_streams | boolen |   |
| enus\_desc | string |   |
| enus\_name | string |   |
| even\_rate | number |   |
| game\_time | string |   |
| history | array | [HISTORY(遊戲歷程)(非必填)](https://docs.google.com/document/d/11o8UuEAxYAZhSNkvJQ0SC0YZ6sd1sdwLRB5j5F6lN88/edit#heading=h.4jdd7ch8jsgw) |
| host\_id | string |   |
| limit | string |   |
| line\_rate | number |   |
| lobby\_id | string |   |
| maintenance | boolen |   |
| max\_big\_chip | number |   |
| max\_black\_chip | number |   |
| max\_chip | number |   |
| max\_column\_chip | number |   |
| max\_corner\_chip | number |   |
| max\_dozen\_chip | number |   |
| max\_even\_chip | number |   |
| max\_line\_chip | number |   |
| max\_odd\_chip | number |   |
| max\_red\_chip | number |   |
| max\_small\_chip | number |   |
| max\_split\_chip | number |   |
| max\_straight\_chip | number |   |
| max\_street\_chip | number |   |
| min\_chip | number |   |
| name | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| odd\_rate | number |   |
| red\_rate | number |   |
| small\_rate | number |   |
| sn | string |   |
| split\_rate | number |   |
| status | string | [基礎定義](https://docs.google.com/spreadsheets/d/1_96YIQb-QvVk9HuOS1LQofNFhrWCCOlHHh-7LYUcvps/edit#gid=0) |
| straight\_rate | number |   |
| streams | string |   |
| street\_rate | number |   |
| table\_id | string |   |
| zhcn\_desc | string |   |
| zhcn\_name | string |   |
| zhtw\_desc | string |   |
| zhtw\_name | string |   |

#

#

# 美式輪盤桌

| 參數名稱 | 格式 | 說明 |
| --- | --- | --- |
| active | string |   |
| big\_rate | string |   |
| black\_rate | string |   |
| column\_rate | string |   |
| corner\_rate | string |   |
| current\_game\_id | string |   |
| dealer | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| dealer\_id | string |   |
| dozen\_rate | string |   |
| enable\_streams | boolean |   |
| enableStreams | string |   |
| enus\_desc | string |   |
| enus\_name | string |   |
| error | string |   |
| even\_rate | string |   |
| five\_rate | string |   |
| game\_time | string |   |
| heart\_beat | string |   |
| history | array | [HISTORY(遊戲歷程)(非必填)](https://docs.google.com/document/d/11o8UuEAxYAZhSNkvJQ0SC0YZ6sd1sdwLRB5j5F6lN88/edit#heading=h.4jdd7ch8jsgw) |
| host\_id | string |   |
| limit | array |   |
| line\_rate | string |   |
| live\_state | string |   |
| lobby\_id | string |   |
| maintenance | boolean |   |
| max\_big\_chip | string |   |
| max\_black\_chip | string |   |
| max\_chip | string |   |
| max\_column\_chip | string |   |
| max\_corner\_chip | string |   |
| max\_dozen\_chip | string |   |
| max\_even\_chip | string |   |
| max\_five\_chip | string |   |
| max\_line\_chip | string |   |
| max\_odd\_chip | string |   |
| max\_red\_chip | string |   |
| max\_small\_chip | string |   |
| max\_split\_chip | string |   |
| max\_straight\_chip | string |   |
| max\_street\_chip | string |   |
| min\_chip | string |   |
| name | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| odd\_rate | string |   |
| red\_rate | string |   |
| small\_rate | string |   |
| sn | string |   |
| split\_rate | string |   |
| status | string | [基礎定義](https://docs.google.com/spreadsheets/d/1_96YIQb-QvVk9HuOS1LQofNFhrWCCOlHHh-7LYUcvps/edit#gid=0) |
| straight\_rate | string |   |
| streams | string |   |
| street\_rate | string |   |
| table\_id | string |   |
| zhcn\_desc | string |   |
| zhcn\_name | string |   |
| zhtw\_desc | string |   |
| zhtw\_name | string |   |





# 瞇牌百家桌

| 參數名稱 | 格式 | 說明 |
| --- | --- | --- |
| active | string |   |
| big\_rate | string |   |
| bkr\_no\_comm\_rate | string |   |
| bkr\_pair\_rate | string |   |
| bkr\_rate | string |   |
| boots | string |   |
| current\_game\_id | string |   |
| dealer | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| dealer\_id | string |   |
| enable\_streams | boolen |   |
| enus\_desc | string |   |
| enus\_name | string |   |
| error | string |   |
| game\_time | string |   |
| heart\_beat | string |   |
| history | array | [HISTORY(遊戲歷程)(非必填)](https://docs.google.com/document/d/11o8UuEAxYAZhSNkvJQ0SC0YZ6sd1sdwLRB5j5F6lN88/edit#heading=h.4jdd7ch8jsgw) |
| host\_id | string |   |
| limit | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| live\_state | string |   |
| lobby\_id | string |   |
| maintenance | boolen |   |
| max\_big\_chip | string |   |
| max\_bkr\_chip | string |   |
| max\_bkr\_no\_comm\_chip | string |   |
| max\_bkr\_pair\_chip | string |   |
| max\_chip | string |   |
| max\_plr\_chip | string |   |
| max\_plr\_pair\_chip | string |   |
| max\_small\_chip | string |   |
| max\_tie\_chip | string |   |
| min\_chip | string |   |
| name | array | [無差別共用](https://docs.google.com/document/d/1x1aKhJZNFyoELfKrzzKMdxcDRugF4a1eUZLaVPSNi-E/edit?usp=sharing) |
| plr\_pair\_rate | string |   |
| plr\_rate | string |   |
| small\_rate | string |   |
| sn | string |   |
| status | string | [基礎定義](https://docs.google.com/spreadsheets/d/1_96YIQb-QvVk9HuOS1LQofNFhrWCCOlHHh-7LYUcvps/edit#gid=0) |
| streams | array |   |
| squent\_time | number |   |
| table\_id | string |   |
| tie\_rate | string |   |
| zhcn\_desc | string |   |
| zhcn\_name | string |   |
| zhtw\_desc | string |   |
| zhtw\_name | string |   |





#
