<template>
	<div id="app">
		<div class="report-box">
			<h1>室内空气质量标准检测报告</h1>

			<div class="header-box" v-if="allinfo.address">
				<div class="item">
					委托方：<div class="content">{{allinfo.address.nickname}}</div>
				</div>
				<div class="item">
					电话：<div class="content">{{allinfo.address.account}}</div>
				</div>
				<!--  -->
				<div class="item item2">
					地址：<div class="content">{{allinfo.address.addressurl}}{{allinfo.address.addressinfo}}</div>
				</div>
				<div class="item">
					检测点数：<div class="content"> {{allinfo.address.order_id}}</div>
				</div>
				<div class="item">
					单价：<div class="content">{{allinfo.address.company_money}} <span> 元/点 &nbsp;</span></div>
				</div>
				<div class="item">
					总价：<div class="content">{{allinfo.address.money}} <span>元（不含税）</span></div>
				</div>
				<div class="item">
					检测单位：<div class="content">{{allinfo.address.company_name}}</div>
				</div>
				<div class="item item2">
					检测标准：<div class="content">室内空气质量检测（GB/T18883-2002）</div>
				</div>
			</div>

			<el-table :data="tableData" border size='mini' :fit="true" custom-class="mytable" center :span-method="objectSpanMethod">
				<el-table-column prop="project" label="检测对象" align="center">
				</el-table-column>
				<el-table-column prop="name" label="检测项目" width="100" align="center">
				</el-table-column>
				<el-table-column prop="standCount" label="标准值" align="center">
				</el-table-column>
				<el-table-column prop="test0" label="初测" width="64" align="center">
				</el-table-column>
				<el-table-column prop="test1" label="复测" width="64" align="center">
				</el-table-column>
				<el-table-column prop="test2" label="三测" width="64" align="center">
				</el-table-column>
				<el-table-column prop="test3" label="四测" width="64" align="center">
				</el-table-column>
				<el-table-column prop="test4" label="五测" width="64" align="center">
				</el-table-column>
				<el-table-column prop="test5" label="六测" width="64" align="center">
				</el-table-column>
			</el-table>
			<div class="info-box" v-if="allinfo.company">
				<div class="item">
					检测人：<div class="content">{{allinfo.company.peo_name}}</div>
				</div>
				<div class="item">
					审核人：<div class="content">{{allinfo.company.shpeople}}</div>
				</div>
				<div class="item">
					批准人：<div class="content">{{allinfo.company.pzpeople}}</div>
				</div>
			</div>
			<div class="description-box">
				报告结果因与检测的室内当时环境具有紧密联系，此检测报告仅作治理效果对比参考作用，不能作为法律纠纷依据，如需CMA资质报告用户解决法律纠纷，请联系400-166-7585.
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: '-1',
				table: {
					"address": {
						"nickname": "赵鹤阳",
						"account": "15000004958",
						"addressurl": "四川省绵阳市游仙区一环路东段149",
						"addressinfo": "良居酒店绵阳店1",
						"addresscode": "",
						"company_money": 0,
						"order_id": 2,
						"money": 0,
						"company_name": "四川净入环境工程有限公司"
					},
					"company": {
						"name": "四川净入环境工程有限公司",
						"shpeople": "",
						"pzpeople": "",
						"company_tel": "",
						"company_money": 0,
						"peo_name": "杨正伟"
					},
					"list": [{
							"project": "区域一",
							"data": [{
									"id": 3000,
									"cho2": 0.13,
									"c6h6": 0.44,
									"tvoc": 0.67,
									"humidity": 27,
									"temperature": 25,
									"b_id": 2417,
									"time": 1564369168
								},
								{
									"id": 3002,
									"cho2": 0.13,
									"c6h6": 0.44,
									"tvoc": 0.67,
									"humidity": 27,
									"temperature": 25,
									"b_id": 2417,
									"time": 1564369180
								}
							],
							"num": 2
						},
						{
							"project": "区域二",
							"data": [{
									"id": 3001,
									"cho2": 0.13,
									"c6h6": 0.44,
									"tvoc": 0.67,
									"humidity": 27,
									"temperature": 25,
									"b_id": 2417,
									"time": 1564369177
								},
								{
									"id": 3003,
									"cho2": 0.13,
									"c6h6": 0.44,
									"tvoc": 0.67,
									"humidity": 27,
									"temperature": 25,
									"b_id": 2417,
									"time": 1564369183
								}
							],
							"num": 2
						}
					],
					"id": 2417
				},
				allinfo: {
					"address": {
						"nickname": "赵鹤阳",
						"account": "15000004958",
						"addressurl": "四川省绵阳市游仙区一环路东段149",
						"addressinfo": "良居酒店绵阳店1",
						"addresscode": "",
						"company_money": 0,
						"order_id": 2,
						"money": 0,
						"company_name": "四川净入环境工程有限公司"
					},
					"company": {
						"name": "四川净入环境工程有限公司",
						"shpeople": "",
						"pzpeople": "",
						"company_tel": "",
						"company_money": 0,
						"peo_name": "杨正伟"
					},
					"list": [{
							"project": "区域一",
							"data": [{
									"id": 3000,
									"cho2": 0.13,
									"c6h6": 0.44,
									"tvoc": 0.67,
									"humidity": 27,
									"temperature": 25,
									"b_id": 2417,
									"time": 1564369168
								},
								{
									"id": 3002,
									"cho2": 0.13,
									"c6h6": 0.44,
									"tvoc": 0.67,
									"humidity": 27,
									"temperature": 25,
									"b_id": 2417,
									"time": 1564369180
								}
							],
							"num": 2
						},
						{
							"project": "区域二",
							"data": [{
									"id": 3001,
									"cho2": 0.13,
									"c6h6": 0.44,
									"tvoc": 0.67,
									"humidity": 27,
									"temperature": 25,
									"b_id": 2417,
									"time": 1564369177
								},
								{
									"id": 3003,
									"cho2": 0.13,
									"c6h6": 0.44,
									"tvoc": 0.67,
									"humidity": 27,
									"temperature": 25,
									"b_id": 2417,
									"time": 1564369183
								}
							],
							"num": 2
						}
					],
					"id": 2417
				},
				tableData: [],
			}
		},
		created() {
			var self = this;
			this.id = this.$utils.getUrlKey("id")
			if (this.id != '-1') {
				let data = {
					id: this.id
				}
				this.$axios.post(this.$SERVICEADDRESS + "home/share/export_data", data)
					.then(res => {
						console.log("返回", res);
						if (res && res.status == 200) {
							if (res.data.code == 1) {
								self.allinfo = res.data.data;
								if(self.allinfo.list)
									self.getList(self.allinfo.list)
							}
						}
					}).finally(e => {}).catch(e => console.error(e))
			}

		},
		methods: {
			startHacking() {
				this.$notify({
					title: 'It works!',
					type: 'success',
					message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
					duration: 5000
				})
			},
			objectSpanMethod({
				row,
				column,
				rowIndex,
				columnIndex
			}) {
				if (columnIndex === 0) {
					if (rowIndex % 3 === 0) {
						return {
							rowspan: 3,
							colspan: 1
						};
					} else {
						return {
							rowspan: 0,
							colspan: 0
						};
					}
				}
			},
			getList(list){
				let array = [];
				for (let index = 0; index < list.length; index++) {
					// 遍历记录，
					const element = list[index];
					if(element.data && element.data.length>0){

						// 获取甲醛
						let cho2Obj = {};
						cho2Obj.project = element.project;
						cho2Obj.name="甲醛(mg/m²)";
						cho2Obj.standCount="≤0.10"
						for (let sindex = 0; sindex < element.data.length; sindex++) {
							const eelement = element.data[sindex];
							cho2Obj[`test`+sindex] = eelement.cho2;
						}        
						console.log(cho2Obj);
						array.push(cho2Obj);
						

						// 获取TVOC
						let obj2 = {};
						obj2.project = element.project;
						obj2.name="苯系物(mg/m²)";
						obj2.standCount="≤0.10"
						for (let sindex = 0; sindex < element.data.length; sindex++) {
							const eelement = element.data[sindex];
							obj2[`test`+sindex] = eelement.c6h6;
						}        
						console.log(obj2);
						array.push(obj2);
						// 获取苯
						let obj3 = {};
						obj3.project = element.project;
						obj3.name="TVOC(mg/m²)";
						obj3.standCount="≤0.10"
						for (let sindex = 0; sindex < element.data.length; sindex++) {
							const eelement = element.data[sindex];
							obj3[`test`+sindex] = eelement.c6h6;
						}        
						console.log(obj3);
						array.push(obj3);
					   

					}
				}
				this.tableData = array;
			},
		}
	}
</script>

<style>
	#app {
		font-family: Helvetica, sans-serif;
		text-align: center;
	}

	.report-box {
		border: 1px solid black;
		width: 100%;
	}

	.header-box {
		margin-top: 20px;
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}

	.header-box .item {
		box-sizing: border-box;
		text-align: left;
		width: 50%;
		padding: 0.4em;
		display: flex;
	}

	.header-box .item2 {
		box-sizing: border-box;
		text-align: left;
		width: 100%;
		/* border: 1px solid pink; */
		padding: 0.4em;
		display: flex;
	}

	.header-box .item .content {
		display: inline-block;
		/* padding-bottom:2px; */
		padding-left: 4px;
		box-sizing: border-box;
		flex: 1;
		border-bottom: 1px solid #000;
		/* text-decoration-skip: ink; */
		position: relative;

		font-size: 14px;
		/* display:flex; */
		vertical-align: bottom;
		font-family: 'simsun';
	}

	.header-box .item .content span {
		position: absolute;
		right: 0;
	}

	.info-box {
		margin: 20px;
		display: flex;
		justify-content: space-around;
		/* border: 1px solid purple; */
	}

	.info-box .item {
		box-sizing: border-box;
		text-align: left;
		width: 50%;
		/* border: 1px solid pink; */
		padding: 0.4em;
		display: flex;
	}

	.info-box .item .content {
		display: inline-block;
		padding-bottom: 2px;
		box-sizing: border-box;
		flex: 1;
		border-bottom: 1px solid #000;
		font-size: 14px;
		font-family: 'simsun';
	}

	.description-box {
		margin: 20px;
		font-weight: 700;
		font-size: 12px;
	}

	.btn-box {
		margin-bottm: 20px;
		;
	}

	.mytable {
		padding: 0 auto;
	}
</style>
