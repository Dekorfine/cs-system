# cs-system 完整代码包(版本 2026.05.30-fix120)
仓库 dekorfine/cs-system · https://dekorfine.github.io/cs-system/

## 部署:根目录文件覆盖,强刷(?v=2026.05.30-fix120)
## SQL(sql/ 内各跑一次)— 跟单协作必须跑 aftersales_events!
- aftersales_events → 跨部门库(含表+RLS for all using(true))· **不跑则"转跟单"后读不回、看不到协作流程**
- org_directory → 跨部门库 · kpi_kv / chargebacks-加cs_fault列 → cs库 · influencer_briefs

## fix120
- 手动上传产品图:支持 Ctrl+V 粘贴 / 拖拽 / 点击,上传后即时预览(可点放大)
- 跟单协作:加状态步骤条(已转跟单→跟单处理→跟单回填→客服确认完成),跟单与所有客服都能打开看进展;转单后若读不回共享表会明确提示去跑 SQL
