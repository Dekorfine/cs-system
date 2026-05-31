# cs-system 完整代码包(版本 2026.05.30-fix119)
仓库 dekorfine/cs-system · https://dekorfine.github.io/cs-system/

## 部署:根目录文件覆盖进仓库根目录,强刷(?v=2026.05.30-fix119)
index.html + 01-core.js…11-help-app.js + kpi-scorer/freight-calc/quotation/express-invoice.html

## SQL(sql/ 内各跑一次)
kpi_kv / chargebacks-加cs_fault列 → cs库 · aftersales_events/org_directory → 跨部门库 · influencer_briefs

## fix119:拉取订单全面优化(6 类表单)
- 拉取后自动填充:客户邮箱/姓名;拒付额外自动填金额+币种(均可手改)
- 选产品 = 真正把产品图存入对应附件(✓标记,再点取消),面板不关闭
- 修复:附件大图预览被压在表单背面(z-index 提到表单之上)
- 覆盖:售后/补件/退款/拒付/定制/实拍 录入表单都有「🔄 拉取订单」
- wsFetchOrderProducts 现返回 products + 客户(email/name) + 金额 + 币种 + 国家
