import type { Transaction } from "./types";

export const RAW_TRANSACTIONS: Transaction[] = [
  {
    "id": "1827057",
    "rawType": "internal_transfer",
    "status": "completed",
    "badge": "Internal",
    "title": "Received from My Account 1 (···· 0419)",
    "subtitle": "P2P transfer",
    "amount": 795.75,
    "currency": "USD",
    "date": "2026-05-07T06:18:18.810706Z",
    "from": {
      "name": "Sakibul Islam",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p27/profile_image/c0ebed0d_1360_4860_b8a0_73cea5d0ba124768096997343855999_vd2129adb_v281bc26d.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040526Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=51235553ba45fe7a2ea68d2f3882bc67d48cc2e48db2ef2bf9c94aa35148a389d3e100c5c74187e3c1b8ad73439c1698b6403b49d5b74cfb6c0d7ffc6c2260aea7e5d69de64f99f3da577491ed6fe786133b91ba55a266db6fd9a60df583202102f1ebb1529eb8e13891d3c763d0bb78977810abe5ab448bab5fa52d66d17bb274994bb38f9784705748ac742b93e49c1534a493e4106508b9b7b792d0f373df1ae31c745bc0ec1a73e382927d613d371454f4724c69946fbc83956df665d54717767803203f47ae6c9332f427343ad166e5627ce242432b4411494e123415f8488a7b601049783ccb2897bc99558f450fd08b6fc98b4838f1e0da59c68ad415",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": false,
      "detail": "My Account 1"
    },
    "to": {
      "name": "Mollar Hotel",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/LINKED_BUSINESS/p1607/business_logo/travelers_v97dae452_v064e0f03.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040526Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=289547c6d213e033dce335445ba7e226a80edb1618922fcbdc746a785e86f42af447aaf99a7ed9598a8cb76773bc410bebb829cc4671cb8db740ae632de31c524766f49955de826d31a633f3fe187477c65c13aab2a1e89688a7551a796127fa06dbc96ae385d23bf41988694300a6eaccab556ea724ac00d7a5e3ffc7d0b4b3d0eda8461fd90419fb1378fd72c903e5cc92a908be020546bf0dd251ad142d257b4f5e16b9d6fa898ba84e13662ea5f4680b1d940632947ad5377ad2b829f635dbc99cd8579f54ad547e5b406424fef9285ebc80e1ba73a2fb1d96b24b3094e605e723a768f909caaf428067b9ee48ce33ef0b251f8375b3a6e6caed9e5fade7",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": true
    },
    "memo": "Last month lunch bill",
    "balanceAfter": 1860.04,
    "accountNo": "101056163198783",
    "dstAccountNo": "101056009230419"
  },
  {
    "id": "1827055",
    "rawType": "Fee",
    "status": "completed",
    "badge": "Fee",
    "title": "International transfer fee",
    "subtitle": "For $10.00 USD → BDT transfer",
    "amount": -0.99,
    "currency": "USD",
    "date": "2026-05-07T05:34:26.745213Z",
    "from": {
      "name": "Mollar Hotel",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/LINKED_BUSINESS/p1607/business_logo/travelers_v97dae452_v064e0f03.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040526Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=289547c6d213e033dce335445ba7e226a80edb1618922fcbdc746a785e86f42af447aaf99a7ed9598a8cb76773bc410bebb829cc4671cb8db740ae632de31c524766f49955de826d31a633f3fe187477c65c13aab2a1e89688a7551a796127fa06dbc96ae385d23bf41988694300a6eaccab556ea724ac00d7a5e3ffc7d0b4b3d0eda8461fd90419fb1378fd72c903e5cc92a908be020546bf0dd251ad142d257b4f5e16b9d6fa898ba84e13662ea5f4680b1d940632947ad5377ad2b829f635dbc99cd8579f54ad547e5b406424fef9285ebc80e1ba73a2fb1d96b24b3094e605e723a768f909caaf428067b9ee48ce33ef0b251f8375b3a6e6caed9e5fade7",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": true
    },
    "to": {
      "name": "Priyo Pay",
      "color": "#A8324E",
      "kind": "priyo_internal",
      "isSelf": false
    },
    "memo": "Fee for Sending $10.00 via USD to BDT Transfer",
    "accountNo": "101056163198783",
    "dstAccountNo": "Priyo Pay Fee",
    "originalContext": {
      "title": "International transfer · USD → BDT",
      "memo": "Withdrawing 10 USD to my Modhumoti Bank Account",
      "amount": "- $10.00"
    }
  },
  {
    "id": "1824017",
    "rawType": "Fee",
    "status": "completed",
    "badge": "Fee",
    "title": "International transfer fee",
    "subtitle": "For $500.00 USD → BDT transfer",
    "amount": -5.0,
    "currency": "USD",
    "date": "2026-05-02T07:48:11.907034Z",
    "from": {
      "name": "Mollar Hotel",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/LINKED_BUSINESS/p1607/business_logo/travelers_v97dae452_v064e0f03.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040526Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=289547c6d213e033dce335445ba7e226a80edb1618922fcbdc746a785e86f42af447aaf99a7ed9598a8cb76773bc410bebb829cc4671cb8db740ae632de31c524766f49955de826d31a633f3fe187477c65c13aab2a1e89688a7551a796127fa06dbc96ae385d23bf41988694300a6eaccab556ea724ac00d7a5e3ffc7d0b4b3d0eda8461fd90419fb1378fd72c903e5cc92a908be020546bf0dd251ad142d257b4f5e16b9d6fa898ba84e13662ea5f4680b1d940632947ad5377ad2b829f635dbc99cd8579f54ad547e5b406424fef9285ebc80e1ba73a2fb1d96b24b3094e605e723a768f909caaf428067b9ee48ce33ef0b251f8375b3a6e6caed9e5fade7",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": true
    },
    "to": {
      "name": "Priyo Pay",
      "color": "#A8324E",
      "kind": "priyo_internal",
      "isSelf": false
    },
    "memo": "Fee for Sending $500.00 via USD to BDT Transfer",
    "accountNo": "101056163198783",
    "dstAccountNo": "Priyo Pay Fee",
    "originalContext": {
      "title": "International transfer · USD → BDT",
      "memo": "Family Support and Expenses",
      "amount": "- $500.00"
    }
  },
  {
    "id": "1824018",
    "rawType": "internal_transfer",
    "status": "completed",
    "badge": "Internal",
    "title": "Received from My Savings Account (···· 4419)",
    "subtitle": "P2P transfer",
    "amount": 200.0,
    "currency": "USD",
    "date": "2026-05-02T07:49:20.381491Z",
    "from": {
      "name": "Nantu Chandra Das",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040524Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=61188fa1c73cbf7198e6315515c792ec9c433c634841e2b43f1bdb8ca7c1258b8cd2e7377993edd366ee112500f9997701f98bdfe504dc1c25c5e20bc3ec4601d2e0d0811e34ff31e6b0399bf4ad5f34e345357f6bf1d32009522906b70f475b2b3141c18b0d72acbe2a658b961aaa90bd84d6f79356e7859a118a20bc16ae7558100bead31415036d7a6798d6b6b4ec90e3459c7f55ee067563114328bb3bf8754a15ebad60a50b51574288f26680ec6e8e9993801db072d6891a05dd0e93372fa6f5383e03b75ed96677d3173d6743c65e94eaf44b1929c32b4f3eeeefe2ebed48a1d4a3d7b343fed9c2b3041bbc3e7fb73fed91fc1b0a4fb5afb48fe5f282",
      "color": "#E2136E",
      "kind": "personal",
      "isSelf": false,
      "detail": "My Savings Account"
    },
    "to": {
      "name": "Mollar Hotel",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/LINKED_BUSINESS/p1607/business_logo/travelers_v97dae452_v064e0f03.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040526Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=289547c6d213e033dce335445ba7e226a80edb1618922fcbdc746a785e86f42af447aaf99a7ed9598a8cb76773bc410bebb829cc4671cb8db740ae632de31c524766f49955de826d31a633f3fe187477c65c13aab2a1e89688a7551a796127fa06dbc96ae385d23bf41988694300a6eaccab556ea724ac00d7a5e3ffc7d0b4b3d0eda8461fd90419fb1378fd72c903e5cc92a908be020546bf0dd251ad142d257b4f5e16b9d6fa898ba84e13662ea5f4680b1d940632947ad5377ad2b829f635dbc99cd8579f54ad547e5b406424fef9285ebc80e1ba73a2fb1d96b24b3094e605e723a768f909caaf428067b9ee48ce33ef0b251f8375b3a6e6caed9e5fade7",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": true
    },
    "memo": "Sending 200 USD to my business Partner",
    "balanceAfter": 1065.28,
    "accountNo": "101056163198783",
    "dstAccountNo": "101056267964419"
  },
  {
    "id": "1817235",
    "rawType": "USD to BDT transfer",
    "status": "completed",
    "badge": "International",
    "title": "International transfer · USD → BDT",
    "subtitle": "To account ···· 6840 · Bangladesh",
    "amount": -10.0,
    "currency": "USD",
    "date": "2026-04-23T18:17:13.622037Z",
    "from": {
      "name": "Mollar Hotel",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/LINKED_BUSINESS/p1607/business_logo/travelers_v97dae452_v064e0f03.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040526Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=289547c6d213e033dce335445ba7e226a80edb1618922fcbdc746a785e86f42af447aaf99a7ed9598a8cb76773bc410bebb829cc4671cb8db740ae632de31c524766f49955de826d31a633f3fe187477c65c13aab2a1e89688a7551a796127fa06dbc96ae385d23bf41988694300a6eaccab556ea724ac00d7a5e3ffc7d0b4b3d0eda8461fd90419fb1378fd72c903e5cc92a908be020546bf0dd251ad142d257b4f5e16b9d6fa898ba84e13662ea5f4680b1d940632947ad5377ad2b829f635dbc99cd8579f54ad547e5b406424fef9285ebc80e1ba73a2fb1d96b24b3094e605e723a768f909caaf428067b9ee48ce33ef0b251f8375b3a6e6caed9e5fade7",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": true
    },
    "to": {
      "name": "Sakibul Islam",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p27/profile_image/c0ebed0d_1360_4860_b8a0_73cea5d0ba124768096997343855999_vd2129adb_v281bc26d.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040526Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=51235553ba45fe7a2ea68d2f3882bc67d48cc2e48db2ef2bf9c94aa35148a389d3e100c5c74187e3c1b8ad73439c1698b6403b49d5b74cfb6c0d7ffc6c2260aea7e5d69de64f99f3da577491ed6fe786133b91ba55a266db6fd9a60df583202102f1ebb1529eb8e13891d3c763d0bb78977810abe5ab448bab5fa52d66d17bb274994bb38f9784705748ac742b93e49c1534a493e4106508b9b7b792d0f373df1ae31c745bc0ec1a73e382927d613d371454f4724c69946fbc83956df665d54717767803203f47ae6c9332f427343ad166e5627ce242432b4411494e123415f8488a7b601049783ccb2897bc99558f450fd08b6fc98b4838f1e0da59c68ad415",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": false,
      "detail": "Sakibul Islam"
    },
    "balanceAfter": 872.26,
    "accountNo": "101056163198783",
    "dstAccountNo": "Sakibul Islam, 2228507709186840 (BDT Account)",
    "feeContext": {
      "title": "International transfer fee",
      "memo": "Fee for Sending $10.00 via USD to BDT Transfer",
      "amount": "- $0.99"
    }
  },
  {
    "id": "1824451",
    "rawType": "USD to BDT transfer",
    "status": "completed",
    "badge": "International",
    "title": "International transfer · USD → BDT",
    "subtitle": "To account ···· 5935 · Bangladesh",
    "amount": -3.0,
    "currency": "USD",
    "date": "2026-05-03T18:02:06.913921Z",
    "from": {
      "name": "USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p1647/profile_image/c844adb1_914f_4237_85db_d501b4e8cb222858435453843806114_v25d51ae3_v4de2ad73.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T091044Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=43ac9243bca76db6e0545d8073d5c4679b2ee77384845880df3dde6be3d37e3543c08eee98583d6287de194a04063f54aa2cfee3a3cb3903dcf50a0427298c186cc0d74c3e5c94b9b6f243741c170c53d8253f27b9976da95af50c35ee4215598aca13c46661c59896602cf547aeefbc5e6fb19b05fcb5774def56cd5c01d15cf1fc1dcb9ccad68f9317210b3284d8ffd2745c230614d4718a57f8a79e559fa396421a5e209131dc5dd7f403d57c5cc487b6484f1ef415fd03217724570183429180c3135b97d68f61947e7411621e156b486205fcef4b61e8e330391cc67080c5a052eb0472fd06caa28c51f75077c0554117b8196eaa18c699bb3f1d750311",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Mr. Alex"
    },
    "to": {
      "name": "Mr. Alex",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p1647/profile_image/c844adb1_914f_4237_85db_d501b4e8cb222858435453843806114_v25d51ae3_v4de2ad73.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T091044Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=43ac9243bca76db6e0545d8073d5c4679b2ee77384845880df3dde6be3d37e3543c08eee98583d6287de194a04063f54aa2cfee3a3cb3903dcf50a0427298c186cc0d74c3e5c94b9b6f243741c170c53d8253f27b9976da95af50c35ee4215598aca13c46661c59896602cf547aeefbc5e6fb19b05fcb5774def56cd5c01d15cf1fc1dcb9ccad68f9317210b3284d8ffd2745c230614d4718a57f8a79e559fa396421a5e209131dc5dd7f403d57c5cc487b6484f1ef415fd03217724570183429180c3135b97d68f61947e7411621e156b486205fcef4b61e8e330391cc67080c5a052eb0472fd06caa28c51f75077c0554117b8196eaa18c699bb3f1d750311",
      "color": "#7A4A11",
      "kind": "personal",
      "isSelf": false,
      "detail": "Mr. Alex"
    },
    "balanceAfter": 2737.79,
    "accountNo": "101056624657482",
    "dstAccountNo": "Mr. Alex, 2229095141315935 (BDT Account)",
    "feeContext": {
      "title": "International transfer fee",
      "memo": "Fee for Sending $3.00 via USD to BDT Transfer",
      "amount": "- $0.99"
    }
  },
  {
    "id": "1817233",
    "rawType": "Fee",
    "status": "completed",
    "badge": "Fee",
    "title": "Fee reversal",
    "subtitle": "Refunded fee",
    "amount": 0.99,
    "currency": "USD",
    "date": "2026-04-23T18:15:26.785347Z",
    "from": {
      "name": "Priyo Pay",
      "color": "#A8324E",
      "kind": "priyo_internal",
      "isSelf": false
    },
    "to": {
      "name": "Mollar Hotel",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/LINKED_BUSINESS/p1607/business_logo/travelers_v97dae452_v064e0f03.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040526Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=289547c6d213e033dce335445ba7e226a80edb1618922fcbdc746a785e86f42af447aaf99a7ed9598a8cb76773bc410bebb829cc4671cb8db740ae632de31c524766f49955de826d31a633f3fe187477c65c13aab2a1e89688a7551a796127fa06dbc96ae385d23bf41988694300a6eaccab556ea724ac00d7a5e3ffc7d0b4b3d0eda8461fd90419fb1378fd72c903e5cc92a908be020546bf0dd251ad142d257b4f5e16b9d6fa898ba84e13662ea5f4680b1d940632947ad5377ad2b829f635dbc99cd8579f54ad547e5b406424fef9285ebc80e1ba73a2fb1d96b24b3094e605e723a768f909caaf428067b9ee48ce33ef0b251f8375b3a6e6caed9e5fade7",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": true
    },
    "memo": "Reversal of Fee for Sending $10.00 via USD to BDT Transfer",
    "accountNo": "101056163198783",
    "dstAccountNo": "Priyo Pay Fee"
  },
  {
    "id": "1817223",
    "rawType": "Fee",
    "status": "completed",
    "badge": "Fee",
    "title": "Fee reversal",
    "subtitle": "Refunded fee",
    "amount": 0.99,
    "currency": "USD",
    "date": "2026-04-23T18:11:12.509899Z",
    "from": {
      "name": "Priyo Pay",
      "color": "#A8324E",
      "kind": "priyo_internal",
      "isSelf": false
    },
    "to": {
      "name": "Mollar Hotel",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/LINKED_BUSINESS/p1607/business_logo/travelers_v97dae452_v064e0f03.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040526Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=289547c6d213e033dce335445ba7e226a80edb1618922fcbdc746a785e86f42af447aaf99a7ed9598a8cb76773bc410bebb829cc4671cb8db740ae632de31c524766f49955de826d31a633f3fe187477c65c13aab2a1e89688a7551a796127fa06dbc96ae385d23bf41988694300a6eaccab556ea724ac00d7a5e3ffc7d0b4b3d0eda8461fd90419fb1378fd72c903e5cc92a908be020546bf0dd251ad142d257b4f5e16b9d6fa898ba84e13662ea5f4680b1d940632947ad5377ad2b829f635dbc99cd8579f54ad547e5b406424fef9285ebc80e1ba73a2fb1d96b24b3094e605e723a768f909caaf428067b9ee48ce33ef0b251f8375b3a6e6caed9e5fade7",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": true
    },
    "memo": "Reversal of Fee for Sending $10.00 via USD to BDT Transfer",
    "accountNo": "101056163198783",
    "dstAccountNo": "Priyo Pay Fee"
  },
  {
    "id": "1815487",
    "rawType": "Fee",
    "status": "completed",
    "badge": "Fee",
    "title": "ACH receive fee",
    "subtitle": "For $72.50 incoming ACH",
    "amount": -0.25,
    "currency": "USD",
    "date": "2026-04-21T07:11:58.069131Z",
    "from": {
      "name": "Mollar Hotel",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/LINKED_BUSINESS/p1607/business_logo/travelers_v97dae452_v064e0f03.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040526Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=289547c6d213e033dce335445ba7e226a80edb1618922fcbdc746a785e86f42af447aaf99a7ed9598a8cb76773bc410bebb829cc4671cb8db740ae632de31c524766f49955de826d31a633f3fe187477c65c13aab2a1e89688a7551a796127fa06dbc96ae385d23bf41988694300a6eaccab556ea724ac00d7a5e3ffc7d0b4b3d0eda8461fd90419fb1378fd72c903e5cc92a908be020546bf0dd251ad142d257b4f5e16b9d6fa898ba84e13662ea5f4680b1d940632947ad5377ad2b829f635dbc99cd8579f54ad547e5b406424fef9285ebc80e1ba73a2fb1d96b24b3094e605e723a768f909caaf428067b9ee48ce33ef0b251f8375b3a6e6caed9e5fade7",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": true
    },
    "to": {
      "name": "Priyo Pay",
      "color": "#A8324E",
      "kind": "priyo_internal",
      "isSelf": false
    },
    "memo": "Fee for Receiving $72.50 via ACH Transfer",
    "accountNo": "101056163198783",
    "dstAccountNo": "Priyo Pay Fee",
    "originalContext": {
      "title": "ACH payment received",
      "amount": "+ $72.50"
    }
  },
  {
    "id": "1815486",
    "rawType": "Fee",
    "status": "completed",
    "badge": "Fee",
    "title": "ACH receive fee",
    "subtitle": "For $72.50 incoming ACH",
    "amount": -0.25,
    "currency": "USD",
    "date": "2026-04-21T07:11:57.586914Z",
    "from": {
      "name": "Mollar Hotel",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/LINKED_BUSINESS/p1607/business_logo/travelers_v97dae452_v064e0f03.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040526Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=289547c6d213e033dce335445ba7e226a80edb1618922fcbdc746a785e86f42af447aaf99a7ed9598a8cb76773bc410bebb829cc4671cb8db740ae632de31c524766f49955de826d31a633f3fe187477c65c13aab2a1e89688a7551a796127fa06dbc96ae385d23bf41988694300a6eaccab556ea724ac00d7a5e3ffc7d0b4b3d0eda8461fd90419fb1378fd72c903e5cc92a908be020546bf0dd251ad142d257b4f5e16b9d6fa898ba84e13662ea5f4680b1d940632947ad5377ad2b829f635dbc99cd8579f54ad547e5b406424fef9285ebc80e1ba73a2fb1d96b24b3094e605e723a768f909caaf428067b9ee48ce33ef0b251f8375b3a6e6caed9e5fade7",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": true
    },
    "to": {
      "name": "Priyo Pay",
      "color": "#A8324E",
      "kind": "priyo_internal",
      "isSelf": false
    },
    "memo": "Fee for Receiving $72.50 via ACH Transfer",
    "accountNo": "101056163198783",
    "dstAccountNo": "Priyo Pay Fee",
    "originalContext": {
      "title": "ACH payment received",
      "amount": "+ $72.50"
    }
  },
  {
    "id": "1815484",
    "rawType": "ach",
    "status": "completed",
    "badge": "Credit",
    "title": "ACH payment received",
    "subtitle": "Incoming",
    "amount": 72.5,
    "currency": "USD",
    "date": "2026-04-21T07:11:57.194103Z",
    "from": {
      "name": "Account Holder",
      "color": "#117ACA",
      "kind": "external_bank",
      "isSelf": false,
      "detail": "Account Holder"
    },
    "to": {
      "name": "Mollar Hotel",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/LINKED_BUSINESS/p1607/business_logo/travelers_v97dae452_v064e0f03.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040526Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=289547c6d213e033dce335445ba7e226a80edb1618922fcbdc746a785e86f42af447aaf99a7ed9598a8cb76773bc410bebb829cc4671cb8db740ae632de31c524766f49955de826d31a633f3fe187477c65c13aab2a1e89688a7551a796127fa06dbc96ae385d23bf41988694300a6eaccab556ea724ac00d7a5e3ffc7d0b4b3d0eda8461fd90419fb1378fd72c903e5cc92a908be020546bf0dd251ad142d257b4f5e16b9d6fa898ba84e13662ea5f4680b1d940632947ad5377ad2b829f635dbc99cd8579f54ad547e5b406424fef9285ebc80e1ba73a2fb1d96b24b3094e605e723a768f909caaf428067b9ee48ce33ef0b251f8375b3a6e6caed9e5fade7",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": true
    },
    "balanceAfter": 884.0,
    "accountNo": "101056163198783",
    "dstAccountNo": "Account Holder, SimFintech, Routing No: 364275034",
    "feeContext": {
      "title": "ACH receive fee",
      "memo": "Fee for Receiving $72.50 via ACH Transfer",
      "amount": "- $0.25"
    }
  },
  {
    "id": "1815482",
    "rawType": "ach",
    "status": "completed",
    "badge": "Credit",
    "title": "ACH payment received",
    "subtitle": "Incoming",
    "amount": 72.5,
    "currency": "USD",
    "date": "2026-04-21T07:11:56.810977Z",
    "from": {
      "name": "Account Holder",
      "color": "#117ACA",
      "kind": "external_bank",
      "isSelf": false,
      "detail": "Account Holder"
    },
    "to": {
      "name": "Mollar Hotel",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/LINKED_BUSINESS/p1607/business_logo/travelers_v97dae452_v064e0f03.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040526Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=289547c6d213e033dce335445ba7e226a80edb1618922fcbdc746a785e86f42af447aaf99a7ed9598a8cb76773bc410bebb829cc4671cb8db740ae632de31c524766f49955de826d31a633f3fe187477c65c13aab2a1e89688a7551a796127fa06dbc96ae385d23bf41988694300a6eaccab556ea724ac00d7a5e3ffc7d0b4b3d0eda8461fd90419fb1378fd72c903e5cc92a908be020546bf0dd251ad142d257b4f5e16b9d6fa898ba84e13662ea5f4680b1d940632947ad5377ad2b829f635dbc99cd8579f54ad547e5b406424fef9285ebc80e1ba73a2fb1d96b24b3094e605e723a768f909caaf428067b9ee48ce33ef0b251f8375b3a6e6caed9e5fade7",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": true
    },
    "balanceAfter": 811.75,
    "accountNo": "101056163198783",
    "dstAccountNo": "Account Holder, SimFintech, Routing No: 364275034",
    "feeContext": {
      "title": "ACH receive fee",
      "memo": "Fee for Receiving $72.50 via ACH Transfer",
      "amount": "- $0.25"
    }
  },
  {
    "id": "1829233",
    "rawType": "internal_transfer",
    "status": "completed",
    "badge": "Internal",
    "title": "Sent to None2Checking (···· 3561)",
    "subtitle": "P2P transfer",
    "amount": -195.0,
    "currency": "USD",
    "date": "2026-05-10T16:56:17.786732Z",
    "from": {
      "name": "My Savings Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Nantu Chandra Das",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#E2136E",
      "kind": "personal",
      "isSelf": false,
      "detail": "None2Checking"
    },
    "memo": "Sending $195 to my another personal account",
    "balanceAfter": 4535.27,
    "accountNo": "101056267964419",
    "dstAccountNo": "101056130673561"
  },
  {
    "id": "1824455",
    "rawType": "wire",
    "status": "completed",
    "badge": "Debit",
    "title": "Outgoing wire transfer",
    "subtitle": "Domestic",
    "amount": -250.0,
    "currency": "USD",
    "date": "2026-05-02T07:51:37.986583Z",
    "from": {
      "name": "My Savings Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "My-Fargo-Wire-Acc",
      "color": "#117ACA",
      "kind": "external_bank",
      "isSelf": false
    },
    "memo": "Testing $250 Dom Wire",
    "balanceAfter": 4730.27,
    "accountNo": "101056267964419",
    "dstAccountNo": "My-Fargo-Wire-Acc (********3456)",
    "feeContext": {
      "title": "Wire transfer fee",
      "memo": "Fee for Sending $250.00 via Wire Transfer",
      "amount": "- $12.50"
    }
  },
  {
    "id": "1816947",
    "rawType": "wire",
    "status": "completed",
    "badge": "Debit",
    "title": "Outgoing wire transfer",
    "subtitle": "Domestic",
    "amount": -550.0,
    "currency": "USD",
    "date": "2026-04-23T08:02:29.077812Z",
    "from": {
      "name": "My Savings Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "My-Fargo-Wire-Acc",
      "color": "#117ACA",
      "kind": "external_bank",
      "isSelf": false
    },
    "memo": "Wire Testing",
    "balanceAfter": 5192.77,
    "accountNo": "101056267964419",
    "dstAccountNo": "My-Fargo-Wire-Acc (********3456)",
    "feeContext": {
      "title": "Wire transfer fee",
      "memo": "Fee for Sending $550.00 via Wire Transfer",
      "amount": "- $15.50"
    }
  },
  {
    "id": "1824021",
    "rawType": "Fee",
    "status": "completed",
    "badge": "Fee",
    "title": "Wire transfer fee",
    "subtitle": "For $250.00 outgoing wire",
    "amount": -12.5,
    "currency": "USD",
    "date": "2026-05-02T07:51:36.873383Z",
    "from": {
      "name": "My Savings Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Priyo Pay",
      "color": "#A8324E",
      "kind": "priyo_internal",
      "isSelf": false
    },
    "memo": "Fee for Sending $250.00 via Wire Transfer",
    "accountNo": "101056267964419",
    "dstAccountNo": "Priyo Pay Fee",
    "originalContext": {
      "title": "Outgoing wire transfer",
      "memo": "Testing $250 Dom Wire",
      "amount": "- $250.00"
    }
  },
  {
    "id": "1816920",
    "rawType": "Fee",
    "status": "completed",
    "badge": "Fee",
    "title": "Wire transfer fee",
    "subtitle": "For $550.00 outgoing wire",
    "amount": -15.5,
    "currency": "USD",
    "date": "2026-04-23T08:02:27.951157Z",
    "from": {
      "name": "My Savings Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Priyo Pay",
      "color": "#A8324E",
      "kind": "priyo_internal",
      "isSelf": false
    },
    "memo": "Fee for Sending $550.00 via Wire Transfer",
    "accountNo": "101056267964419",
    "dstAccountNo": "Priyo Pay Fee",
    "originalContext": {
      "title": "Outgoing wire transfer",
      "memo": "Wire Testing",
      "amount": "- $550.00"
    }
  },
  {
    "id": "1824018",
    "rawType": "internal_transfer",
    "status": "completed",
    "badge": "Internal",
    "title": "Sent to Mollar Hotel (···· 8783)",
    "subtitle": "P2P transfer",
    "amount": -200.0,
    "currency": "USD",
    "date": "2026-05-02T07:49:20.381491Z",
    "from": {
      "name": "My Savings Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Mollar Hotel",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/LINKED_BUSINESS/p1607/business_logo/travelers_v97dae452_v064e0f03.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050536Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=710d0677b8cd406e8989ceca15475d7848cb3919f9a8fdaa2eb9c77df54d3f44802e1089ca38f9187280ff3d47bb18187ba37cf612c16fd7be55902daaca331dbea96ec24db5f869018ae81e392b8a9c3d3de25c821eea825aa0355c522d9267a97c2231d5e678396933c515a751f82c0ba8038126d637cbfb57d9cb636177ccaa704c618212ec02f0c58d99395c331749e4c0bf1bceb62bc44f8e0be773a18ac88ff4387a076179569b7506a70206a48be72bbb6f4e6544bfe1ded68f1495f99d402fb806ddda2fd2b2307479a0e8d8ae0ec73349bcf053b956e7d44bbf826efb5af57b91bb177fb308cef656103a05105cf92389ee749c02f0c2e97b002b68",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": false
    },
    "memo": "Sending 200 USD to my business Partner",
    "balanceAfter": 4992.77,
    "accountNo": "101056267964419",
    "dstAccountNo": "101056163198783"
  },
  {
    "id": "1816913",
    "rawType": "ach",
    "status": "completed",
    "badge": "Debit",
    "title": "ACH transfer sent",
    "subtitle": "Outgoing",
    "amount": -500.0,
    "currency": "USD",
    "date": "2026-04-23T08:01:01.202005Z",
    "from": {
      "name": "My Savings Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Wells-Fargo-ACH-Acc",
      "color": "#7A4A11",
      "kind": "external_bank",
      "isSelf": false
    },
    "memo": "Testing ACH with 500 USD",
    "balanceAfter": 5758.27,
    "accountNo": "101056267964419",
    "dstAccountNo": "Wells-Fargo-ACH-Acc (********3456)",
    "feeContext": {
      "title": "ACH send fee",
      "memo": "Fee for Sending $500.00 via ACH Transfer",
      "amount": "- $5.00"
    }
  },
  {
    "id": "1825064",
    "rawType": "ach",
    "status": "completed",
    "badge": "Debit",
    "title": "ACH transfer sent",
    "subtitle": "Outgoing",
    "amount": -75.0,
    "currency": "USD",
    "date": "2026-05-05T05:45:22.311374Z",
    "from": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "External account",
      "color": "#7A4A11",
      "kind": "external_bank",
      "isSelf": false,
      "detail": "External account"
    },
    "balanceAfter": 6102.14,
    "accountNo": "101056531252682",
    "dstAccountNo": "Account Holder, SimFintech, Routing No: 364275034",
    "feeContext": {
      "title": "ACH send fee",
      "memo": "Fee for Sending $75.00 via ACH Transfer",
      "amount": "- $0.75"
    }
  },
  {
    "id": "1816912",
    "rawType": "Fee",
    "status": "completed",
    "badge": "Fee",
    "title": "ACH send fee",
    "subtitle": "For $500.00 outgoing ACH",
    "amount": -5.0,
    "currency": "USD",
    "date": "2026-04-23T08:01:00.179975Z",
    "from": {
      "name": "My Savings Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Priyo Pay",
      "color": "#A8324E",
      "kind": "priyo_internal",
      "isSelf": false
    },
    "memo": "Fee for Sending $500.00 via ACH Transfer",
    "accountNo": "101056267964419",
    "dstAccountNo": "Priyo Pay Fee",
    "originalContext": {
      "title": "ACH transfer sent",
      "memo": "Testing ACH with 500 USD",
      "amount": "- $500.00"
    }
  },
  {
    "id": "1825066",
    "rawType": "Fee",
    "status": "completed",
    "badge": "Fee",
    "title": "ACH send fee",
    "subtitle": "For $75.00 outgoing ACH",
    "amount": -0.75,
    "currency": "USD",
    "date": "2026-05-05T05:45:23.516676Z",
    "from": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Priyo Pay",
      "color": "#A8324E",
      "kind": "priyo_internal",
      "isSelf": false
    },
    "memo": "Fee for Sending $75.00 via ACH Transfer",
    "accountNo": "101056531252682",
    "dstAccountNo": "Priyo Pay Fee",
    "originalContext": {
      "title": "ACH transfer sent",
      "amount": "- $75.00"
    }
  },
  {
    "id": "1815295",
    "rawType": "Fee",
    "status": "completed",
    "badge": "Subscription",
    "title": "Initial subscription",
    "subtitle": "One-time setup fee",
    "amount": -36.0,
    "currency": "USD",
    "date": "2026-04-20T14:51:03.856038Z",
    "from": {
      "name": "My Savings Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Priyo Pay",
      "color": "#A8324E",
      "kind": "priyo_internal",
      "isSelf": false
    },
    "memo": "Initial charge for acquiring new resources",
    "accountNo": "101056267964419",
    "dstAccountNo": "Priyo Pay Fee"
  },
  {
    "id": "1776056",
    "rawType": "ach",
    "status": "completed",
    "badge": "Credit",
    "title": "ACH payment received",
    "subtitle": "Incoming",
    "amount": 12.5,
    "currency": "USD",
    "date": "2026-03-10T13:43:41.227695Z",
    "from": {
      "name": "Account Holder",
      "color": "#117ACA",
      "kind": "external_bank",
      "isSelf": false,
      "detail": "Account Holder"
    },
    "to": {
      "name": "My Savings Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "balanceAfter": 6237.27,
    "accountNo": "101056267964419",
    "dstAccountNo": "Account Holder, SimFintech, Routing No: 364275034"
  },
  {
    "id": "1825075",
    "rawType": "ach",
    "status": "completed",
    "badge": "Credit",
    "title": "ACH payment received",
    "subtitle": "Incoming",
    "amount": 75.0,
    "currency": "USD",
    "date": "2026-05-05T05:48:52.698061Z",
    "from": {
      "name": "Account Holder",
      "color": "#117ACA",
      "kind": "external_bank",
      "isSelf": false,
      "detail": "Account Holder"
    },
    "to": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "balanceAfter": 6775.64,
    "accountNo": "101056531252682",
    "dstAccountNo": "Account Holder, SimFintech, Routing No: 364275034"
  },
  {
    "id": "1829169",
    "rawType": "internal_transfer",
    "status": "completed",
    "badge": "Internal",
    "title": "Sent to Business2Saving (···· 7007)",
    "subtitle": "P2P transfer",
    "amount": -525.0,
    "currency": "USD",
    "date": "2026-05-09T12:08:38.188505Z",
    "from": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Business2Saving",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/BUSINESS/p234/business_logo/customs_images_v0ebab782_v9430bf0a.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050536Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=1c7586036e6866fe436311c647bf61af20e035db40efd30a8fbb5c6f10f7e3991336f3ee53fa08ed54ad32407614c05251f47c33e7a39ccaeace532016c3b3a6f2e4c734a115264c3b6a57c6fa633eca059ff37579f8d22dc90c7086cb55919918c6f641da67f0e1f28dfb1e74d5be82a95b1c996ff46c0648af1c5a06c3b10b03ee5125578999dd6c863a117febb6fda4d8bbe495ebc7035c31ade7d79cdbafdf3ba0ea21a026769c3d935870a8f351694af97c6737cc340e4171cfa64ed142413d699e9a2e6d6169f8a15ad3108c57ae31673c7dc4016dd4ac38681a0adc0264789bbaf9895784ad2feacb71ad4d85236f08c829edee548e274cf3beb4dce2",
      "color": "#8A8A99",
      "kind": "business",
      "isSelf": false,
      "detail": "JhakaNaka Shop Business"
    },
    "memo": "Testing Priyo to Priyo Transfer",
    "balanceAfter": 6200.4,
    "accountNo": "101056531252682",
    "dstAccountNo": "101056284427007",
    "feeContext": {
      "title": "Transaction fee",
      "memo": "Fee for Sending $525.00 via Transfer to another Priyo Pay User",
      "amount": "- $5.25"
    }
  },
  {
    "id": "1829168",
    "rawType": "Fee",
    "status": "completed",
    "badge": "Fee",
    "title": "Transaction fee",
    "subtitle": "For $525.00 Transfer to another Priyo Pay User",
    "amount": -5.25,
    "currency": "USD",
    "date": "2026-05-09T12:08:37.333532Z",
    "from": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Priyo Pay",
      "color": "#A8324E",
      "kind": "priyo_internal",
      "isSelf": false
    },
    "memo": "Fee for Sending $525.00 via Transfer to another Priyo Pay User",
    "accountNo": "101056531252682",
    "dstAccountNo": "Priyo Pay Fee",
    "originalContext": {
      "title": "P2P transfer sent",
      "memo": "Testing Priyo to Priyo Transfer",
      "amount": "- $525.00"
    }
  },
  {
    "id": "1825096",
    "rawType": "Fee",
    "status": "completed",
    "badge": "Fee",
    "title": "Transaction fee",
    "subtitle": "For $150.00 Transfer to another Priyo Pay User",
    "amount": -1.5,
    "currency": "USD",
    "date": "2026-05-05T05:50:07.620785Z",
    "from": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Priyo Pay",
      "color": "#A8324E",
      "kind": "priyo_internal",
      "isSelf": false
    },
    "memo": "Fee for Sending $150.00 via Transfer to another Priyo Pay User",
    "accountNo": "101056531252682",
    "dstAccountNo": "Priyo Pay Fee",
    "originalContext": {
      "title": "P2P transfer sent",
      "memo": "Sending fund $150 to my friend",
      "amount": "- $150.00"
    }
  },
  {
    "id": "1829167",
    "rawType": "internal_transfer",
    "status": "completed",
    "badge": "Internal",
    "title": "Sent to Prime-Biz-Checking (···· 9133)",
    "subtitle": "P2P transfer",
    "amount": -200.0,
    "currency": "USD",
    "date": "2026-05-09T12:06:48.391672Z",
    "from": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Prime Bank PLC",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/BUSINESS/p1536/business_logo/BURO_BD_v9dfa31b0_va1fa8ad8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050703Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=1ffda78ea9ae41e1ad39c42d6de8a7a12d5152b08d500926c565d609b3e9638532e48b9c7905b6ae92835ddaec4bf888f805aab00930508f806fbe77b30755557e278666ccb6f33986e82be871e34e07993114618514a5dbff4ad69f8ea76ebbd3c4d0c0775d6a9bd90dbdb6a036ab0ecca82457f4256c52266139491a7ec57c43b862a215d6283f7ba7f9abf794dbc92057c4b37d37ed89d0ef995f8e8093e2d6f50b67f9e09f1447650f400038d23aa3fde5da7a977268358c5d160214e430e505ec6a3409d8df2af3b120506599b587b71804542db682182e1c132e3d56e03f61abdca24be2654aecad1551abc39266a1396b67a70a0a42feec00551d54b1",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": false,
      "detail": "Prime-Biz-Checking"
    },
    "memo": "Testing transfer of 200 dollars",
    "balanceAfter": 6730.65,
    "accountNo": "101056531252682",
    "dstAccountNo": "101056879249133"
  },
  {
    "id": "1825097",
    "rawType": "internal_transfer",
    "status": "completed",
    "badge": "Internal",
    "title": "Sent to Rokibul Bashar (···· 7407)",
    "subtitle": "P2P transfer",
    "amount": -150.0,
    "currency": "USD",
    "date": "2026-05-05T05:50:08.529606Z",
    "from": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Rokibul Bashar",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p1822/profile_image/7MTEOYUT_400x400_va93f83c9_ve48c766c.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050703Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=478d3857d877b13dfcda311baa5adf2dd1c15a91582ae3b1548eac637e220075b089f02c383a80c37ee05ce75261595e6c094b1326c7fd36c0abeb7c26e9505c2332866b87fb00c434b8d0fb05a2bfa7b54422413cc1cd6964d6927b3633a0b50a2869f38a8857af2b994b1d84e57abe64fbf202cab8dac5620c652d2c843dc5747c6bdae7a8e4e8f423a9b0c24933ed50c45c716d8fef9d6111a7b2338026cedf72c47de19ea4e5fe05855f7eea240d68ce280060975ff638ae104c85f300ac655181dc54ae405062054bb402472c307b21d074073959e61e8f66f59e253854a694d52235b43479ac9a6e0c2fe092fe85a5acc90e471d5139d23272cca7c611",
      "color": "#BF6B16",
      "kind": "personal",
      "isSelf": false
    },
    "memo": "Sending fund $150 to my friend",
    "balanceAfter": 6947.14,
    "accountNo": "101056531252682",
    "dstAccountNo": "101056117527407",
    "feeContext": {
      "title": "Transaction fee",
      "memo": "Fee for Sending $150.00 via Transfer to another Priyo Pay User",
      "amount": "- $1.50"
    }
  },
  {
    "id": "1825095",
    "rawType": "Fee",
    "status": "completed",
    "badge": "Fee",
    "title": "Card debit fee",
    "subtitle": "For $75.00 card debit",
    "amount": -3.0,
    "currency": "USD",
    "date": "2026-05-05T05:49:12.28457Z",
    "from": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Priyo Pay",
      "color": "#A8324E",
      "kind": "priyo_internal",
      "isSelf": false
    },
    "memo": "Fee for Sending $75.00 via Card Transaction",
    "accountNo": "101056531252682",
    "dstAccountNo": "Priyo Pay Fee",
    "originalContext": {
      "title": "Card debit",
      "amount": "- $75.00"
    }
  },
  {
    "id": "1825090",
    "rawType": "Fee",
    "status": "completed",
    "badge": "Fee",
    "title": "Card debit fee",
    "subtitle": "For $75.00 card debit",
    "amount": -3.0,
    "currency": "USD",
    "date": "2026-05-05T05:49:07.76972Z",
    "from": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Priyo Pay",
      "color": "#A8324E",
      "kind": "priyo_internal",
      "isSelf": false
    },
    "memo": "Fee for Sending $75.00 via Card Transaction",
    "accountNo": "101056531252682",
    "dstAccountNo": "Priyo Pay Fee",
    "originalContext": {
      "title": "Card debit",
      "amount": "- $75.00"
    }
  },
  {
    "id": "1825094",
    "rawType": "card",
    "status": "completed",
    "badge": "Card Debit",
    "title": "ATM withdrawal — Marqeta Storefront",
    "subtitle": "···· 1180 · St. Petersburg, CA, USA",
    "amount": -75.0,
    "currency": "USD",
    "date": "2026-05-05T05:49:09Z",
    "from": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Marqeta Storefront",
      "color": "#8A8A99",
      "kind": "merchant",
      "isSelf": false,
      "detail": "Marqeta Storefront"
    },
    "balanceAfter": 7101.64,
    "accountNo": "101056531252682",
    "dstAccountNo": "10105699092451641",
    "merchant": {
      "name": "Marqeta Storefront",
      "location": "St. Petersburg, CA, USA"
    },
    "card": {
      "mask": "···· 1180",
      "lastFour": "1180"
    },
    "feeContext": {
      "title": "Card debit fee",
      "memo": "Fee for Sending $75.00 via Card Transaction",
      "amount": "- $3.00"
    }
  },
  {
    "id": "1825088",
    "rawType": "card",
    "status": "completed",
    "badge": "Card Debit",
    "title": "ATM withdrawal — Marqeta Storefront",
    "subtitle": "···· 1180 · St. Petersburg, CA, USA",
    "amount": -75.0,
    "currency": "USD",
    "date": "2026-05-05T05:49:04Z",
    "from": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Marqeta Storefront",
      "color": "#8A8A99",
      "kind": "merchant",
      "isSelf": false,
      "detail": "Marqeta Storefront"
    },
    "balanceAfter": 7089.64,
    "accountNo": "101056531252682",
    "dstAccountNo": "10105699092451641",
    "merchant": {
      "name": "Marqeta Storefront",
      "location": "St. Petersburg, CA, USA"
    },
    "card": {
      "mask": "···· 1180",
      "lastFour": "1180"
    },
    "feeContext": {
      "title": "Card debit fee",
      "memo": "Fee for Sending $75.00 via Card Transaction",
      "amount": "- $3.00"
    }
  },
  {
    "id": "1825091",
    "rawType": "wire",
    "status": "completed",
    "badge": "Credit",
    "title": "Incoming wire transfer",
    "subtitle": "Domestic",
    "amount": 100.0,
    "currency": "USD",
    "date": "2026-05-05T05:49:08.164898Z",
    "from": {
      "name": "Buzz Aldrin",
      "color": "#A8324E",
      "kind": "external_bank",
      "isSelf": false,
      "detail": "Buzz Aldrin"
    },
    "to": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "memo": "simulated wire transfer",
    "balanceAfter": 7186.64,
    "accountNo": "101056531252682",
    "dstAccountNo": "Buzz Aldrin (****2357)",
    "feeContext": {
      "title": "Wire transfer fee",
      "memo": "Fee for Receiving $100.00 via Wire Transfer",
      "amount": "- $10.00"
    }
  },
  {
    "id": "1825085",
    "rawType": "wire",
    "status": "completed",
    "badge": "Credit",
    "title": "Incoming wire transfer",
    "subtitle": "Domestic",
    "amount": 100.0,
    "currency": "USD",
    "date": "2026-05-05T05:49:02.925427Z",
    "from": {
      "name": "Buzz Aldrin",
      "color": "#A8324E",
      "kind": "external_bank",
      "isSelf": false,
      "detail": "Buzz Aldrin"
    },
    "to": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "memo": "simulated wire transfer",
    "balanceAfter": 7174.64,
    "accountNo": "101056531252682",
    "dstAccountNo": "Buzz Aldrin (****2357)",
    "feeContext": {
      "title": "Wire transfer fee",
      "memo": "Fee for Receiving $100.00 via Wire Transfer",
      "amount": "- $10.00"
    }
  },
  {
    "id": "22875815",
    "rawType": "internal_transfer",
    "status": "completed",
    "badge": "Internal",
    "title": "Sent to Al-amim Vai (···· 7926)",
    "subtitle": "P2P transfer",
    "amount": -20.0,
    "currency": "USD",
    "date": "2026-04-05T07:44:16.197772Z",
    "from": {
      "name": "Tafsir's USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_prod_docs/compressed/PERSON/p51865/profile_image/1000000177_v355d475b_v601797f0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-prod-bucket-storage%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T081026Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=060a3f834ddbcdd8d9cd8e73b4b8408041ad263eecbc17b5476ae64181bb2b25da8f71f5bf6ef8d49d7a47072b0969346ec1a0944c5ed00b01d0958f5b168a8b54af62b3eeb30230aa4e520f95a111394401531088fff4d93f96c4d4572c82a496d268c87fc2eff66422b7abcfaa1a0efb7fc816f8d6602c60597db05f5ecca9d91607263b450d20ef7475418c663f4196cda5df7049b1fb537184d2998580ebbe2b28abff26512365b6c7f7aef70ae4927e57c9b4d51cfcefa6cf2c46a8b09837ce4b74d0e33ed75ead04f752c2a0ddd087e813a0d065ac4e2a931d51aec5ae6f031c388947e613bc0bdb1efaf99221acb2e38f50d812dd00a3715f2853275a",
      "color": "#E2136E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Muhammad Tafsiruzzaman"
    },
    "to": {
      "name": "Al-amim Vai",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_prod_docs/compressed/PERSON/p379/profile_image/al_amin_image_ve6fd8825.jpeg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-prod-bucket-storage%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T081027Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=26531bc6e22f8d094b988d0ffb17d10d18589c6eb9842c3daa3f6bbcfc5f978089b8996d61dc201f512c3a93f53620824521d731fb53b64ecd2c71348b9d51732ec08282ff3356555c89f04bf3fcd6b7392bcce2427b5da780a6d6f04e43e4b96dbfacdfb086edab53c25064880390be19d7049fd72a138fbb1b49e526af37849bab1ea7ded7ede378637975842498fa47bd99ae72896a841a7d03d948e2faad442732aed836c9b043e9726a77319118a2595c0677d7037fa78557e5fa67e9a1c1bb821aa58c719d894702bf32582a8c06b1606060ac85ff4ba21adb624a846ea50839412bef9f3c6d54b1c8cb44205c187ef983ae65894c365002cb930477f1",
      "color": "#1F6F8B",
      "kind": "personal",
      "isSelf": false,
      "detail": "Al-amin azad"
    },
    "memo": "Online course fee",
    "balanceAfter": 20.0,
    "accountNo": "111795426036",
    "dstAccountNo": "111343267926"
  },
  {
    "id": "1827607",
    "rawType": "internal_transfer",
    "status": "completed",
    "badge": "Internal",
    "title": "Received from USD Checking Account -  Business (···· 0868)",
    "subtitle": "P2P transfer",
    "amount": 5.0,
    "currency": "USD",
    "date": "2026-05-07T19:19:17.297557Z",
    "from": {
      "name": "Edu Net",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": false,
      "detail": "USD Checking Account -  Business"
    },
    "to": {
      "name": "USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p1647/profile_image/c844adb1_914f_4237_85db_d501b4e8cb222858435453843806114_v25d51ae3_v4de2ad73.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T091044Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=43ac9243bca76db6e0545d8073d5c4679b2ee77384845880df3dde6be3d37e3543c08eee98583d6287de194a04063f54aa2cfee3a3cb3903dcf50a0427298c186cc0d74c3e5c94b9b6f243741c170c53d8253f27b9976da95af50c35ee4215598aca13c46661c59896602cf547aeefbc5e6fb19b05fcb5774def56cd5c01d15cf1fc1dcb9ccad68f9317210b3284d8ffd2745c230614d4718a57f8a79e559fa396421a5e209131dc5dd7f403d57c5cc487b6484f1ef415fd03217724570183429180c3135b97d68f61947e7411621e156b486205fcef4b61e8e330391cc67080c5a052eb0472fd06caa28c51f75077c0554117b8196eaa18c699bb3f1d750311",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Mr. Alex"
    },
    "memo": "Family Support and Expenses",
    "balanceAfter": 2181.3,
    "accountNo": "101056624657482",
    "dstAccountNo": "101056437000868"
  },
  {
    "id": "1824447",
    "rawType": "internal_transfer",
    "status": "completed",
    "badge": "Internal",
    "title": "Received from USD Checking Account -  Business (···· 0868)",
    "subtitle": "P2P transfer",
    "amount": 20.0,
    "currency": "USD",
    "date": "2026-05-03T17:27:14.302626Z",
    "from": {
      "name": "Edu Net",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": false,
      "detail": "USD Checking Account -  Business"
    },
    "to": {
      "name": "USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p1647/profile_image/c844adb1_914f_4237_85db_d501b4e8cb222858435453843806114_v25d51ae3_v4de2ad73.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T091044Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=43ac9243bca76db6e0545d8073d5c4679b2ee77384845880df3dde6be3d37e3543c08eee98583d6287de194a04063f54aa2cfee3a3cb3903dcf50a0427298c186cc0d74c3e5c94b9b6f243741c170c53d8253f27b9976da95af50c35ee4215598aca13c46661c59896602cf547aeefbc5e6fb19b05fcb5774def56cd5c01d15cf1fc1dcb9ccad68f9317210b3284d8ffd2745c230614d4718a57f8a79e559fa396421a5e209131dc5dd7f403d57c5cc487b6484f1ef415fd03217724570183429180c3135b97d68f61947e7411621e156b486205fcef4b61e8e330391cc67080c5a052eb0472fd06caa28c51f75077c0554117b8196eaa18c699bb3f1d750311",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Mr. Alex"
    },
    "memo": "Test",
    "balanceAfter": 2747.77,
    "accountNo": "101056624657482",
    "dstAccountNo": "101056437000868"
  },
  {
    "id": "1827193",
    "rawType": "internal_transfer",
    "status": "completed",
    "badge": "Internal",
    "title": "Received from Yousuf Sarkar (···· 3136)",
    "subtitle": "P2P transfer",
    "amount": 20.0,
    "currency": "USD",
    "date": "2026-05-07T11:32:04.770359Z",
    "from": {
      "name": "Yousuf Sarkar",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p1817/profile_image/yousus_v1f1e66d7_vdf430ddb.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T091047Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=669d765bdf2bc1c453a16a0fc973391b31279ffafe91b0019ca728a0fc3d50faab41b0ec0f04414d3715168334a6c01e45193cf06dc180697c583b17da88038e80df2c7fea12d10e4dc576dd622171fb321cb3d0f1026d27b07e3a4db05a267dd8d059ef3163c0540972e4fbd7f3df7db67727e13ecc958ac66f101859ff0497c35b1328ba3a520165195db51ba75891bd1195edafe8d68892eb692c6187b6ca0b948683649c48212617a64975f6fa261b1354a12568828cc901b667589ba5dbafc57377c77f4397a060b4229c49f97961d64b657aed9e7afbaddb321792dca5d4c4820678ed001d5d52dda8b7d2b3034f1814b370f4dd2232a71670908a0c0b",
      "color": "#0F0F4A",
      "kind": "personal",
      "isSelf": false
    },
    "to": {
      "name": "USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p1647/profile_image/c844adb1_914f_4237_85db_d501b4e8cb222858435453843806114_v25d51ae3_v4de2ad73.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T091044Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=43ac9243bca76db6e0545d8073d5c4679b2ee77384845880df3dde6be3d37e3543c08eee98583d6287de194a04063f54aa2cfee3a3cb3903dcf50a0427298c186cc0d74c3e5c94b9b6f243741c170c53d8253f27b9976da95af50c35ee4215598aca13c46661c59896602cf547aeefbc5e6fb19b05fcb5774def56cd5c01d15cf1fc1dcb9ccad68f9317210b3284d8ffd2745c230614d4718a57f8a79e559fa396421a5e209131dc5dd7f403d57c5cc487b6484f1ef415fd03217724570183429180c3135b97d68f61947e7411621e156b486205fcef4b61e8e330391cc67080c5a052eb0472fd06caa28c51f75077c0554117b8196eaa18c699bb3f1d750311",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Mr. Alex"
    },
    "memo": "Wage earnings",
    "balanceAfter": 2176.3,
    "accountNo": "101056624657482",
    "dstAccountNo": "101056500223136"
  },
  {
    "id": "1824458",
    "rawType": "internal_transfer",
    "status": "completed",
    "badge": "Internal",
    "title": "Sent to Yousuf Sarkar (···· 3136)",
    "subtitle": "P2P transfer",
    "amount": -500.0,
    "currency": "USD",
    "date": "2026-05-04T05:09:44.108598Z",
    "from": {
      "name": "USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p1647/profile_image/c844adb1_914f_4237_85db_d501b4e8cb222858435453843806114_v25d51ae3_v4de2ad73.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T091044Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=43ac9243bca76db6e0545d8073d5c4679b2ee77384845880df3dde6be3d37e3543c08eee98583d6287de194a04063f54aa2cfee3a3cb3903dcf50a0427298c186cc0d74c3e5c94b9b6f243741c170c53d8253f27b9976da95af50c35ee4215598aca13c46661c59896602cf547aeefbc5e6fb19b05fcb5774def56cd5c01d15cf1fc1dcb9ccad68f9317210b3284d8ffd2745c230614d4718a57f8a79e559fa396421a5e209131dc5dd7f403d57c5cc487b6484f1ef415fd03217724570183429180c3135b97d68f61947e7411621e156b486205fcef4b61e8e330391cc67080c5a052eb0472fd06caa28c51f75077c0554117b8196eaa18c699bb3f1d750311",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Mr. Alex"
    },
    "to": {
      "name": "Yousuf Sarkar",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p1817/profile_image/yousus_v1f1e66d7_vdf430ddb.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T091047Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=669d765bdf2bc1c453a16a0fc973391b31279ffafe91b0019ca728a0fc3d50faab41b0ec0f04414d3715168334a6c01e45193cf06dc180697c583b17da88038e80df2c7fea12d10e4dc576dd622171fb321cb3d0f1026d27b07e3a4db05a267dd8d059ef3163c0540972e4fbd7f3df7db67727e13ecc958ac66f101859ff0497c35b1328ba3a520165195db51ba75891bd1195edafe8d68892eb692c6187b6ca0b948683649c48212617a64975f6fa261b1354a12568828cc901b667589ba5dbafc57377c77f4397a060b4229c49f97961d64b657aed9e7afbaddb321792dca5d4c4820678ed001d5d52dda8b7d2b3034f1814b370f4dd2232a71670908a0c0b",
      "color": "#0F0F4A",
      "kind": "personal",
      "isSelf": false
    },
    "memo": "gdhhdh",
    "balanceAfter": 2157.29,
    "accountNo": "101056624657482",
    "dstAccountNo": "101056500223136",
    "feeContext": {
      "title": "Transaction fee",
      "memo": "Fee for Sending $500.00 via Transfer to another Priyo Pay User",
      "amount": "- $5.00"
    }
  },
  {
    "id": "1824454",
    "rawType": "internal_transfer",
    "status": "completed",
    "badge": "Internal",
    "title": "Sent to USD Checking Account -  Business (···· 0868)",
    "subtitle": "P2P transfer",
    "amount": -25.0,
    "currency": "USD",
    "date": "2026-05-04T04:32:27.095819Z",
    "from": {
      "name": "USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p1647/profile_image/c844adb1_914f_4237_85db_d501b4e8cb222858435453843806114_v25d51ae3_v4de2ad73.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T091044Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=43ac9243bca76db6e0545d8073d5c4679b2ee77384845880df3dde6be3d37e3543c08eee98583d6287de194a04063f54aa2cfee3a3cb3903dcf50a0427298c186cc0d74c3e5c94b9b6f243741c170c53d8253f27b9976da95af50c35ee4215598aca13c46661c59896602cf547aeefbc5e6fb19b05fcb5774def56cd5c01d15cf1fc1dcb9ccad68f9317210b3284d8ffd2745c230614d4718a57f8a79e559fa396421a5e209131dc5dd7f403d57c5cc487b6484f1ef415fd03217724570183429180c3135b97d68f61947e7411621e156b486205fcef4b61e8e330391cc67080c5a052eb0472fd06caa28c51f75077c0554117b8196eaa18c699bb3f1d750311",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Mr. Alex"
    },
    "to": {
      "name": "Edu Net",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": false,
      "detail": "USD Checking Account -  Business"
    },
    "memo": "test",
    "balanceAfter": 2662.29,
    "accountNo": "101056624657482",
    "dstAccountNo": "101056437000868"
  },
  {
    "id": "1824396",
    "rawType": "internal_transfer",
    "status": "completed",
    "badge": "Internal",
    "title": "Sent to USD Checking Account -  Business (···· 0868)",
    "subtitle": "P2P transfer",
    "amount": -20.0,
    "currency": "USD",
    "date": "2026-05-03T15:48:52.7994Z",
    "from": {
      "name": "USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p1647/profile_image/c844adb1_914f_4237_85db_d501b4e8cb222858435453843806114_v25d51ae3_v4de2ad73.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T091044Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=43ac9243bca76db6e0545d8073d5c4679b2ee77384845880df3dde6be3d37e3543c08eee98583d6287de194a04063f54aa2cfee3a3cb3903dcf50a0427298c186cc0d74c3e5c94b9b6f243741c170c53d8253f27b9976da95af50c35ee4215598aca13c46661c59896602cf547aeefbc5e6fb19b05fcb5774def56cd5c01d15cf1fc1dcb9ccad68f9317210b3284d8ffd2745c230614d4718a57f8a79e559fa396421a5e209131dc5dd7f403d57c5cc487b6484f1ef415fd03217724570183429180c3135b97d68f61947e7411621e156b486205fcef4b61e8e330391cc67080c5a052eb0472fd06caa28c51f75077c0554117b8196eaa18c699bb3f1d750311",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Mr. Alex"
    },
    "to": {
      "name": "Edu Net",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": false,
      "detail": "USD Checking Account -  Business"
    },
    "memo": "Test",
    "balanceAfter": 2727.77,
    "accountNo": "101056624657482",
    "dstAccountNo": "101056437000868"
  },
  {
    "id": "1824372",
    "rawType": "internal_transfer",
    "status": "completed",
    "badge": "Internal",
    "title": "Sent to Marco (···· 5222)",
    "subtitle": "P2P transfer",
    "amount": -5.0,
    "currency": "USD",
    "date": "2026-05-03T11:21:15.494042Z",
    "from": {
      "name": "USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p1647/profile_image/c844adb1_914f_4237_85db_d501b4e8cb222858435453843806114_v25d51ae3_v4de2ad73.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T091044Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=43ac9243bca76db6e0545d8073d5c4679b2ee77384845880df3dde6be3d37e3543c08eee98583d6287de194a04063f54aa2cfee3a3cb3903dcf50a0427298c186cc0d74c3e5c94b9b6f243741c170c53d8253f27b9976da95af50c35ee4215598aca13c46661c59896602cf547aeefbc5e6fb19b05fcb5774def56cd5c01d15cf1fc1dcb9ccad68f9317210b3284d8ffd2745c230614d4718a57f8a79e559fa396421a5e209131dc5dd7f403d57c5cc487b6484f1ef415fd03217724570183429180c3135b97d68f61947e7411621e156b486205fcef4b61e8e330391cc67080c5a052eb0472fd06caa28c51f75077c0554117b8196eaa18c699bb3f1d750311",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Mr. Alex"
    },
    "to": {
      "name": "Marco",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p1775/profile_image/2267_350_13895_v4cfc37ee_va27ab2a2.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T091047Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=4f5849d4095c9e85c417bbc60e1d42c86df3ab8d5cff2e796687c0ffd2b52d46af94ac81729416d1ca1e29a4ab037b896ad6b533c5f74809008065289f7d0993fa71ef4de36df54c7edf3986e310d5dae9faea98463928b8f7f427b4715a5956ae6fb34c70fb66fb7af0e99fbfa04945dd674dc3a986df4fb46e5d1325c05169ab530d40b735b1bdaf7e3d41240d082cb8a97553346d082b8679dcd72afa3565718a037cc2dd71f3dc820707c90a18c82a04a755dcc5d28594e35745032635cdd0d24710d4efd0550c2b6e6f120d169da3403542b81fdaa552d080f7e4ef4955509410a440cf4771a1377091db940e8e6c5d2aa6b0652697f86b5de5acbb67e3",
      "color": "#117ACA",
      "kind": "personal",
      "isSelf": false,
      "detail": "Marco Jansen"
    },
    "memo": "Test",
    "balanceAfter": 2727.77,
    "accountNo": "101056624657482",
    "dstAccountNo": "101056409005222",
    "feeContext": {
      "title": "Transaction fee",
      "memo": "Fee for Sending $5.00 via Transfer to another Priyo Pay User",
      "amount": "- $1.00"
    }
  },
  {
    "id": "2190746",
    "rawType": "wire",
    "status": "pending",
    "badge": "Debit",
    "title": "Outgoing wire transfer",
    "subtitle": "Domestic",
    "amount": -625.0,
    "currency": "USD",
    "date": "2026-05-11T05:13:51.788837Z",
    "from": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "External account",
      "color": "#7A4A11",
      "kind": "external_bank",
      "isSelf": false,
      "detail": "External account"
    },
    "memo": "Domestic wire $625.00 to my WellsFargo Bank",
    "accountNo": "101056531252682",
    "dstAccountNo": "10105699845072792",
    "feeContext": {
      "title": "Wire transfer fee",
      "memo": "Fee for Sending $625.00 via Wire Transfer",
      "amount": "- $16.25"
    }
  },
  {
    "id": "29950750",
    "rawType": "card",
    "status": "pending",
    "badge": "Card Debit",
    "title": "Purchase — GOOGLE *CHROME TEMP",
    "subtitle": "DUBLIN 4, IRL, IRL",
    "amount": 0.0,
    "currency": "USD",
    "date": "2026-05-07T17:14:11Z",
    "from": {
      "name": "Tafsir's USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_prod_docs/compressed/PERSON/p51865/profile_image/1000000177_v355d475b_v601797f0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-prod-bucket-storage%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T081026Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=060a3f834ddbcdd8d9cd8e73b4b8408041ad263eecbc17b5476ae64181bb2b25da8f71f5bf6ef8d49d7a47072b0969346ec1a0944c5ed00b01d0958f5b168a8b54af62b3eeb30230aa4e520f95a111394401531088fff4d93f96c4d4572c82a496d268c87fc2eff66422b7abcfaa1a0efb7fc816f8d6602c60597db05f5ecca9d91607263b450d20ef7475418c663f4196cda5df7049b1fb537184d2998580ebbe2b28abff26512365b6c7f7aef70ae4927e57c9b4d51cfcefa6cf2c46a8b09837ce4b74d0e33ed75ead04f752c2a0ddd087e813a0d065ac4e2a931d51aec5ae6f031c388947e613bc0bdb1efaf99221acb2e38f50d812dd00a3715f2853275a",
      "color": "#E2136E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Muhammad Tafsiruzzaman"
    },
    "to": {
      "name": "GOOGLE *CHROME TEMP",
      "color": "#8A8A99",
      "kind": "merchant",
      "isSelf": false,
      "detail": "GOOGLE *CHROME TEMP"
    },
    "accountNo": "111795426036",
    "dstAccountNo": "11199914216463",
    "merchant": {
      "name": "GOOGLE *CHROME TEMP",
      "location": "DUBLIN 4, IRL, IRL"
    }
  },
  {
    "id": "2187882",
    "rawType": "USD to BDT transfer",
    "status": "expired",
    "badge": "International",
    "title": "International transfer · USD → BDT",
    "subtitle": "To account ···· 3454 · Bangladesh",
    "amount": 0.0,
    "currency": "USD",
    "date": "2026-05-07T05:34:27.937538Z",
    "from": {
      "name": "Mollar Hotel",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/LINKED_BUSINESS/p1607/business_logo/travelers_v97dae452_v064e0f03.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040526Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=289547c6d213e033dce335445ba7e226a80edb1618922fcbdc746a785e86f42af447aaf99a7ed9598a8cb76773bc410bebb829cc4671cb8db740ae632de31c524766f49955de826d31a633f3fe187477c65c13aab2a1e89688a7551a796127fa06dbc96ae385d23bf41988694300a6eaccab556ea724ac00d7a5e3ffc7d0b4b3d0eda8461fd90419fb1378fd72c903e5cc92a908be020546bf0dd251ad142d257b4f5e16b9d6fa898ba84e13662ea5f4680b1d940632947ad5377ad2b829f635dbc99cd8579f54ad547e5b406424fef9285ebc80e1ba73a2fb1d96b24b3094e605e723a768f909caaf428067b9ee48ce33ef0b251f8375b3a6e6caed9e5fade7",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": true
    },
    "to": {
      "name": "Nantu Das",
      "color": "#8A8A99",
      "kind": "external_bank",
      "isSelf": false,
      "detail": "MODHUMOTI BANK LIMITED"
    },
    "accountNo": "101056163198783",
    "dstAccountNo": "Nantu Das, 34354354353454, FARIDGANJ, MODHUMOTI BANK LIMITED",
    "feeContext": {
      "title": "International transfer fee",
      "memo": "Fee for Sending $10.00 via USD to BDT Transfer",
      "amount": "- $0.99"
    }
  },
  {
    "id": "2178621",
    "rawType": "USD to BDT transfer",
    "status": "expired",
    "badge": "International",
    "title": "International transfer · USD → BDT",
    "subtitle": "To account ···· 2362 · Bangladesh",
    "amount": 0.0,
    "currency": "USD",
    "date": "2026-04-23T18:20:03.973143Z",
    "from": {
      "name": "Mollar Hotel",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/LINKED_BUSINESS/p1607/business_logo/travelers_v97dae452_v064e0f03.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040526Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=289547c6d213e033dce335445ba7e226a80edb1618922fcbdc746a785e86f42af447aaf99a7ed9598a8cb76773bc410bebb829cc4671cb8db740ae632de31c524766f49955de826d31a633f3fe187477c65c13aab2a1e89688a7551a796127fa06dbc96ae385d23bf41988694300a6eaccab556ea724ac00d7a5e3ffc7d0b4b3d0eda8461fd90419fb1378fd72c903e5cc92a908be020546bf0dd251ad142d257b4f5e16b9d6fa898ba84e13662ea5f4680b1d940632947ad5377ad2b829f635dbc99cd8579f54ad547e5b406424fef9285ebc80e1ba73a2fb1d96b24b3094e605e723a768f909caaf428067b9ee48ce33ef0b251f8375b3a6e6caed9e5fade7",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": true
    },
    "to": {
      "name": "Nantu Das",
      "color": "#8A8A99",
      "kind": "external_bank",
      "isSelf": false,
      "detail": "EASTERN BANK LTD."
    },
    "accountNo": "101056163198783",
    "dstAccountNo": "Nantu Das, 107126252362, MIRPUR, EASTERN BANK LTD.",
    "feeContext": {
      "title": "International transfer fee",
      "memo": "Fee for Sending $10.00 via USD to BDT Transfer",
      "amount": "- $0.99"
    }
  },
  {
    "id": "2184123",
    "rawType": "USD to BDT transfer",
    "status": "expired",
    "badge": "International",
    "title": "International transfer · USD → BDT",
    "subtitle": "To account ···· 0143 · Bangladesh",
    "amount": 0.0,
    "currency": "USD",
    "date": "2026-05-02T07:48:14.078024Z",
    "from": {
      "name": "Mollar Hotel",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/LINKED_BUSINESS/p1607/business_logo/travelers_v97dae452_v064e0f03.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040526Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=289547c6d213e033dce335445ba7e226a80edb1618922fcbdc746a785e86f42af447aaf99a7ed9598a8cb76773bc410bebb829cc4671cb8db740ae632de31c524766f49955de826d31a633f3fe187477c65c13aab2a1e89688a7551a796127fa06dbc96ae385d23bf41988694300a6eaccab556ea724ac00d7a5e3ffc7d0b4b3d0eda8461fd90419fb1378fd72c903e5cc92a908be020546bf0dd251ad142d257b4f5e16b9d6fa898ba84e13662ea5f4680b1d940632947ad5377ad2b829f635dbc99cd8579f54ad547e5b406424fef9285ebc80e1ba73a2fb1d96b24b3094e605e723a768f909caaf428067b9ee48ce33ef0b251f8375b3a6e6caed9e5fade7",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": true
    },
    "to": {
      "name": "Nantu Chandra Das",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040524Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=61188fa1c73cbf7198e6315515c792ec9c433c634841e2b43f1bdb8ca7c1258b8cd2e7377993edd366ee112500f9997701f98bdfe504dc1c25c5e20bc3ec4601d2e0d0811e34ff31e6b0399bf4ad5f34e345357f6bf1d32009522906b70f475b2b3141c18b0d72acbe2a658b961aaa90bd84d6f79356e7859a118a20bc16ae7558100bead31415036d7a6798d6b6b4ec90e3459c7f55ee067563114328bb3bf8754a15ebad60a50b51574288f26680ec6e8e9993801db072d6891a05dd0e93372fa6f5383e03b75ed96677d3173d6743c65e94eaf44b1929c32b4f3eeeefe2ebed48a1d4a3d7b343fed9c2b3041bbc3e7fb73fed91fc1b0a4fb5afb48fe5f282",
      "color": "#E2136E",
      "kind": "personal",
      "isSelf": false,
      "detail": "Nantu Chandra Das"
    },
    "accountNo": "101056163198783",
    "dstAccountNo": "Nantu Chandra Das, 2224655294700143 (BDT Account)",
    "feeContext": {
      "title": "International transfer fee",
      "memo": "Fee for Sending $500.00 via USD to BDT Transfer",
      "amount": "- $5.00"
    }
  },
  {
    "id": "1596523",
    "rawType": "USD to BDT transfer",
    "status": "expired",
    "badge": "International",
    "title": "International transfer · USD → BDT",
    "subtitle": "To account ···· 6840 · Bangladesh",
    "amount": 0.0,
    "currency": "USD",
    "date": "2025-07-04T03:29:14.626641Z",
    "from": {
      "name": "My Savings Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Sakibul Islam",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p27/profile_image/c0ebed0d_1360_4860_b8a0_73cea5d0ba124768096997343855999_vd2129adb_v281bc26d.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=08fc820764a263794a1ca50f7147a362d41d0d170bd5f960209c5dd79bd13d45f8e1feeb52011c7b9859443a2f0b02d013d1e518842b49fa243ae45eecf8f27718cdf50ffbc8f1190e4bef2b9fab148aa9eb79668885f69fe6ff3821c55033fa11165b508d66d405199ddf43f713856fea7603cee1935d355a53650ea5e4df3a297efcde7087cb7fc6cc3b996c1bd70c811854510c91cb56c0c709f10752d983e34c1e7152e98ea3808c79afe09cc899caa2eb174764467eca48339b5d608cff494894dfa5675f1c36811007efe009bd2ad3d9509f778d3b23c1726b692bc0b135b762b17a4fe63911fa6fb6e6e24a1b9805a6a81b34cab466076ba8de3b171f",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": false,
      "detail": "Sakibul Islam"
    },
    "accountNo": "101056267964419",
    "dstAccountNo": "Sakibul Islam, 2228507709186840 (BDT Account)",
    "feeContext": {
      "title": "International transfer fee",
      "memo": "Fee for Sending $500.00 via USD to BDT Transfer",
      "amount": "- $2.50"
    }
  },
  {
    "id": "2182532",
    "rawType": "USD to BDT transfer",
    "status": "expired",
    "badge": "International",
    "title": "International transfer · USD → BDT",
    "subtitle": "To account ···· 7386 · Bangladesh",
    "amount": 0.0,
    "currency": "USD",
    "date": "2026-04-30T10:57:54.802659Z",
    "from": {
      "name": "Mollar Hotel",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/LINKED_BUSINESS/p1607/business_logo/travelers_v97dae452_v064e0f03.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T040526Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=289547c6d213e033dce335445ba7e226a80edb1618922fcbdc746a785e86f42af447aaf99a7ed9598a8cb76773bc410bebb829cc4671cb8db740ae632de31c524766f49955de826d31a633f3fe187477c65c13aab2a1e89688a7551a796127fa06dbc96ae385d23bf41988694300a6eaccab556ea724ac00d7a5e3ffc7d0b4b3d0eda8461fd90419fb1378fd72c903e5cc92a908be020546bf0dd251ad142d257b4f5e16b9d6fa898ba84e13662ea5f4680b1d940632947ad5377ad2b829f635dbc99cd8579f54ad547e5b406424fef9285ebc80e1ba73a2fb1d96b24b3094e605e723a768f909caaf428067b9ee48ce33ef0b251f8375b3a6e6caed9e5fade7",
      "color": "#7A4A11",
      "kind": "business",
      "isSelf": true
    },
    "to": {
      "name": "BKASH",
      "color": "#E2136E",
      "kind": "wallet",
      "isSelf": false,
      "detail": "Nantu Das"
    },
    "accountNo": "101056163198783",
    "dstAccountNo": "Nantu Das, +8801717567386, BKASH",
    "feeContext": {
      "title": "International transfer fee",
      "memo": "Fee for Sending $20.00 via USD to BDT Transfer",
      "amount": "- $0.99"
    }
  },
  {
    "id": "1572221",
    "rawType": "USD to BDT transfer",
    "status": "expired",
    "badge": "International",
    "title": "International transfer · USD → BDT",
    "subtitle": "To account ···· 7386 · Bangladesh",
    "amount": 0.0,
    "currency": "USD",
    "date": "2025-06-17T12:40:58.700188Z",
    "from": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "BKASH",
      "color": "#E2136E",
      "kind": "wallet",
      "isSelf": false,
      "detail": "Nantu Das"
    },
    "accountNo": "101056531252682",
    "dstAccountNo": "Nantu Das, +8801717567386, BKASH",
    "feeContext": {
      "title": "International transfer fee",
      "memo": "Fee for Sending $500.00 via USD to BDT Transfer",
      "amount": "- $1.99"
    }
  },
  {
    "id": "997279",
    "rawType": "card",
    "status": "declined",
    "badge": "Card Debit",
    "title": "ATM withdrawal — Marqeta Storefront",
    "subtitle": "St. Petersburg, CA, USA",
    "amount": -2.25,
    "currency": "USD",
    "date": "2024-07-11T12:14:15Z",
    "from": {
      "name": "My Savings Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Marqeta Storefront",
      "color": "#8A8A99",
      "kind": "merchant",
      "isSelf": false,
      "detail": "Marqeta Storefront"
    },
    "reason": "Network Declined — Incorrect PIN.",
    "accountNo": "101056267964419",
    "dstAccountNo": "10105699092451641",
    "merchant": {
      "name": "Marqeta Storefront",
      "location": "St. Petersburg, CA, USA"
    }
  },
  {
    "id": "997264",
    "rawType": "card",
    "status": "declined",
    "badge": "Card Debit",
    "title": "ATM withdrawal — Marqeta Storefront",
    "subtitle": "St. Petersburg, CA, USA",
    "amount": 0.0,
    "currency": "USD",
    "date": "2024-07-11T11:59:32Z",
    "from": {
      "name": "My Savings Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Marqeta Storefront",
      "color": "#8A8A99",
      "kind": "merchant",
      "isSelf": false,
      "detail": "Marqeta Storefront"
    },
    "reason": "Network Declined",
    "accountNo": "101056267964419",
    "dstAccountNo": "10105699092451641",
    "merchant": {
      "name": "Marqeta Storefront",
      "location": "St. Petersburg, CA, USA"
    }
  },
  {
    "id": "2184336",
    "rawType": "card",
    "status": "expired",
    "badge": "Card Debit",
    "title": "Purchase — Marqeta Storefront",
    "subtitle": "St. Petersbu, USA",
    "amount": 0.0,
    "currency": "USD",
    "date": "2026-05-03T03:44:51Z",
    "from": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Marqeta Storefront",
      "color": "#8A8A99",
      "kind": "merchant",
      "isSelf": false,
      "detail": "Marqeta Storefront"
    },
    "accountNo": "101056531252682",
    "dstAccountNo": "10105699092451641",
    "merchant": {
      "name": "Marqeta Storefront",
      "location": "St. Petersbu, USA"
    }
  },
  {
    "id": "2184335",
    "rawType": "card",
    "status": "expired",
    "badge": "Card Debit",
    "title": "Purchase — Marqeta Storefront",
    "subtitle": "St. Petersbu, USA",
    "amount": 0.0,
    "currency": "USD",
    "date": "2026-05-03T03:44:23Z",
    "from": {
      "name": "Nantu-Das-Checking",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p899/profile_image/my_image_unnamed_v4faed0c7_v753a9920.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T050535Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=884bcef4a905e0fe18fe3ca242de46c6606af6fb46ecad6045c4cb40e325c47d3b24833972ac2b231efe41a08f6033ca8d570d1f5c1dc663eec9cf183812b01c7b39e64cb5474236ded3173128fd0d2cdd05654957d7c70dfce260a0f765480dce9a18b76d4dffcd2d19c68ecb139f5b58d8bbb3d4c4ddb6658cbc3364aaa0153e092056caf91b0fb2b299b4e791f9268890cfd20d322163334f41d1374b95d6fc263d588eb5d5399d1f569716d140624d909174ce00f3f8c4c92051389b90ccb36502cc904db0cf001bbb048e286b8318d4a04929842620cf7c5ec51432c7344b99cc1b62c10a109973b9bedb2d8753da75cdb96515907f80137db13de61511",
      "color": "#A8324E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Nantu Chandra Das"
    },
    "to": {
      "name": "Marqeta Storefront",
      "color": "#8A8A99",
      "kind": "merchant",
      "isSelf": false,
      "detail": "Marqeta Storefront"
    },
    "accountNo": "101056531252682",
    "dstAccountNo": "10105699092451641",
    "merchant": {
      "name": "Marqeta Storefront",
      "location": "St. Petersbu, USA"
    }
  },
  {
    "id": "27867256",
    "rawType": "card",
    "status": "declined",
    "badge": "Card Debit",
    "title": "Purchase — REFERO",
    "subtitle": "BRACELONA, B, ESP",
    "amount": -120.0,
    "currency": "USD",
    "date": "2026-04-03T13:32:28Z",
    "from": {
      "name": "Tafsir's USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_prod_docs/compressed/PERSON/p51865/profile_image/1000000177_v355d475b_v601797f0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-prod-bucket-storage%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T081026Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=060a3f834ddbcdd8d9cd8e73b4b8408041ad263eecbc17b5476ae64181bb2b25da8f71f5bf6ef8d49d7a47072b0969346ec1a0944c5ed00b01d0958f5b168a8b54af62b3eeb30230aa4e520f95a111394401531088fff4d93f96c4d4572c82a496d268c87fc2eff66422b7abcfaa1a0efb7fc816f8d6602c60597db05f5ecca9d91607263b450d20ef7475418c663f4196cda5df7049b1fb537184d2998580ebbe2b28abff26512365b6c7f7aef70ae4927e57c9b4d51cfcefa6cf2c46a8b09837ce4b74d0e33ed75ead04f752c2a0ddd087e813a0d065ac4e2a931d51aec5ae6f031c388947e613bc0bdb1efaf99221acb2e38f50d812dd00a3715f2853275a",
      "color": "#E2136E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Muhammad Tafsiruzzaman"
    },
    "to": {
      "name": "REFERO",
      "color": "#2D7A4F",
      "kind": "merchant",
      "isSelf": false,
      "detail": "REFERO"
    },
    "reason": "Insufficient Funds — Transaction not permitted.",
    "accountNo": "111795426036",
    "dstAccountNo": "11199914216463",
    "merchant": {
      "name": "REFERO",
      "location": "BRACELONA, B, ESP"
    }
  },
  {
    "id": "27696906",
    "rawType": "card",
    "status": "declined",
    "badge": "Card Debit",
    "title": "Purchase — REFERO",
    "subtitle": "BRACELONA, B, ESP",
    "amount": -120.0,
    "currency": "USD",
    "date": "2026-04-01T00:32:21Z",
    "from": {
      "name": "Tafsir's USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_prod_docs/compressed/PERSON/p51865/profile_image/1000000177_v355d475b_v601797f0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-prod-bucket-storage%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T081026Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=060a3f834ddbcdd8d9cd8e73b4b8408041ad263eecbc17b5476ae64181bb2b25da8f71f5bf6ef8d49d7a47072b0969346ec1a0944c5ed00b01d0958f5b168a8b54af62b3eeb30230aa4e520f95a111394401531088fff4d93f96c4d4572c82a496d268c87fc2eff66422b7abcfaa1a0efb7fc816f8d6602c60597db05f5ecca9d91607263b450d20ef7475418c663f4196cda5df7049b1fb537184d2998580ebbe2b28abff26512365b6c7f7aef70ae4927e57c9b4d51cfcefa6cf2c46a8b09837ce4b74d0e33ed75ead04f752c2a0ddd087e813a0d065ac4e2a931d51aec5ae6f031c388947e613bc0bdb1efaf99221acb2e38f50d812dd00a3715f2853275a",
      "color": "#E2136E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Muhammad Tafsiruzzaman"
    },
    "to": {
      "name": "REFERO",
      "color": "#2D7A4F",
      "kind": "merchant",
      "isSelf": false,
      "detail": "REFERO"
    },
    "reason": "Insufficient Funds — Transaction not permitted.",
    "accountNo": "111795426036",
    "dstAccountNo": "11199914216463",
    "merchant": {
      "name": "REFERO",
      "location": "BRACELONA, B, ESP"
    }
  },
  {
    "id": "26875578",
    "rawType": "card",
    "status": "expired",
    "badge": "Card Debit",
    "title": "Purchase — GOOGLE *TEMPORARY HOLD",
    "subtitle": "MOUNTAIN VIEW, CA, USA",
    "amount": 0.0,
    "currency": "USD",
    "date": "2026-03-17T16:48:27Z",
    "from": {
      "name": "Tafsir's USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_prod_docs/compressed/PERSON/p51865/profile_image/1000000177_v355d475b_v601797f0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-prod-bucket-storage%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T081026Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=060a3f834ddbcdd8d9cd8e73b4b8408041ad263eecbc17b5476ae64181bb2b25da8f71f5bf6ef8d49d7a47072b0969346ec1a0944c5ed00b01d0958f5b168a8b54af62b3eeb30230aa4e520f95a111394401531088fff4d93f96c4d4572c82a496d268c87fc2eff66422b7abcfaa1a0efb7fc816f8d6602c60597db05f5ecca9d91607263b450d20ef7475418c663f4196cda5df7049b1fb537184d2998580ebbe2b28abff26512365b6c7f7aef70ae4927e57c9b4d51cfcefa6cf2c46a8b09837ce4b74d0e33ed75ead04f752c2a0ddd087e813a0d065ac4e2a931d51aec5ae6f031c388947e613bc0bdb1efaf99221acb2e38f50d812dd00a3715f2853275a",
      "color": "#E2136E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Muhammad Tafsiruzzaman"
    },
    "to": {
      "name": "GOOGLE *TEMPORARY HOLD",
      "imageUrl": "https://content.mx.com/logos/merchants/MCH-93f846f9-1a64-8815-3911-abb354b9748b.png",
      "color": "#5B3A8C",
      "kind": "merchant",
      "isSelf": false,
      "detail": "GOOGLE *TEMPORARY HOLD"
    },
    "accountNo": "111795426036",
    "dstAccountNo": "11199914216463",
    "merchant": {
      "name": "GOOGLE *TEMPORARY HOLD",
      "location": "MOUNTAIN VIEW, CA, USA",
      "logoUrl": "https://content.mx.com/logos/merchants/MCH-93f846f9-1a64-8815-3911-abb354b9748b.png"
    }
  },
  {
    "id": "25855506",
    "rawType": "card",
    "status": "expired",
    "badge": "Card Debit",
    "title": "Purchase — GOOGLE *TEMPORARY HOLD",
    "subtitle": "MOUNTAIN VIEW, CA, USA",
    "amount": 0.0,
    "currency": "USD",
    "date": "2026-02-28T06:45:04Z",
    "from": {
      "name": "Tafsir's USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_prod_docs/compressed/PERSON/p51865/profile_image/1000000177_v355d475b_v601797f0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-prod-bucket-storage%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T081026Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=060a3f834ddbcdd8d9cd8e73b4b8408041ad263eecbc17b5476ae64181bb2b25da8f71f5bf6ef8d49d7a47072b0969346ec1a0944c5ed00b01d0958f5b168a8b54af62b3eeb30230aa4e520f95a111394401531088fff4d93f96c4d4572c82a496d268c87fc2eff66422b7abcfaa1a0efb7fc816f8d6602c60597db05f5ecca9d91607263b450d20ef7475418c663f4196cda5df7049b1fb537184d2998580ebbe2b28abff26512365b6c7f7aef70ae4927e57c9b4d51cfcefa6cf2c46a8b09837ce4b74d0e33ed75ead04f752c2a0ddd087e813a0d065ac4e2a931d51aec5ae6f031c388947e613bc0bdb1efaf99221acb2e38f50d812dd00a3715f2853275a",
      "color": "#E2136E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Muhammad Tafsiruzzaman"
    },
    "to": {
      "name": "GOOGLE *TEMPORARY HOLD",
      "imageUrl": "https://content.mx.com/logos/merchants/MCH-93f846f9-1a64-8815-3911-abb354b9748b.png",
      "color": "#5B3A8C",
      "kind": "merchant",
      "isSelf": false,
      "detail": "GOOGLE *TEMPORARY HOLD"
    },
    "accountNo": "111795426036",
    "dstAccountNo": "11199914216463",
    "merchant": {
      "name": "GOOGLE *TEMPORARY HOLD",
      "location": "MOUNTAIN VIEW, CA, USA",
      "logoUrl": "https://content.mx.com/logos/merchants/MCH-93f846f9-1a64-8815-3911-abb354b9748b.png"
    }
  },
  {
    "id": "25838794",
    "rawType": "card",
    "status": "released",
    "badge": "Card Credit",
    "title": "Google One payment received",
    "subtitle": "Mountain View, CA, USA",
    "amount": -0.66,
    "currency": "USD",
    "date": "2026-02-28T00:04:16Z",
    "from": {
      "name": "Tafsir's USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_prod_docs/compressed/PERSON/p51865/profile_image/1000000177_v355d475b_v601797f0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-prod-bucket-storage%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T081026Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=060a3f834ddbcdd8d9cd8e73b4b8408041ad263eecbc17b5476ae64181bb2b25da8f71f5bf6ef8d49d7a47072b0969346ec1a0944c5ed00b01d0958f5b168a8b54af62b3eeb30230aa4e520f95a111394401531088fff4d93f96c4d4572c82a496d268c87fc2eff66422b7abcfaa1a0efb7fc816f8d6602c60597db05f5ecca9d91607263b450d20ef7475418c663f4196cda5df7049b1fb537184d2998580ebbe2b28abff26512365b6c7f7aef70ae4927e57c9b4d51cfcefa6cf2c46a8b09837ce4b74d0e33ed75ead04f752c2a0ddd087e813a0d065ac4e2a931d51aec5ae6f031c388947e613bc0bdb1efaf99221acb2e38f50d812dd00a3715f2853275a",
      "color": "#E2136E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Muhammad Tafsiruzzaman"
    },
    "to": {
      "name": "Google One",
      "imageUrl": "https://content.mx.com/logos/merchants/MCH-6a347286-4639-462d-8050-7165d995ca64.png",
      "color": "#BF6B16",
      "kind": "merchant",
      "isSelf": false,
      "detail": "Google One"
    },
    "accountNo": "111795426036",
    "dstAccountNo": "11199914216463",
    "merchant": {
      "name": "Google One",
      "location": "Mountain View, CA, USA",
      "logoUrl": "https://content.mx.com/logos/merchants/MCH-6a347286-4639-462d-8050-7165d995ca64.png"
    }
  },
  {
    "id": "23681402",
    "rawType": "card",
    "status": "declined",
    "badge": "Card Debit",
    "title": "Purchase — GITHUB, INC.",
    "subtitle": "SAN FRANCISCO, CA, USA",
    "amount": -10.0,
    "currency": "USD",
    "date": "2026-01-19T08:35:27Z",
    "from": {
      "name": "Tafsir's USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_prod_docs/compressed/PERSON/p51865/profile_image/1000000177_v355d475b_v601797f0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-prod-bucket-storage%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T081026Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=060a3f834ddbcdd8d9cd8e73b4b8408041ad263eecbc17b5476ae64181bb2b25da8f71f5bf6ef8d49d7a47072b0969346ec1a0944c5ed00b01d0958f5b168a8b54af62b3eeb30230aa4e520f95a111394401531088fff4d93f96c4d4572c82a496d268c87fc2eff66422b7abcfaa1a0efb7fc816f8d6602c60597db05f5ecca9d91607263b450d20ef7475418c663f4196cda5df7049b1fb537184d2998580ebbe2b28abff26512365b6c7f7aef70ae4927e57c9b4d51cfcefa6cf2c46a8b09837ce4b74d0e33ed75ead04f752c2a0ddd087e813a0d065ac4e2a931d51aec5ae6f031c388947e613bc0bdb1efaf99221acb2e38f50d812dd00a3715f2853275a",
      "color": "#E2136E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Muhammad Tafsiruzzaman"
    },
    "to": {
      "name": "GITHUB, INC.",
      "color": "#117ACA",
      "kind": "merchant",
      "isSelf": false,
      "detail": "GITHUB, INC."
    },
    "reason": "Insufficient Funds — Transaction not permitted.",
    "accountNo": "111795426036",
    "dstAccountNo": "11199914216463",
    "merchant": {
      "name": "GITHUB, INC.",
      "location": "SAN FRANCISCO, CA, USA"
    }
  },
  {
    "id": "23681401",
    "rawType": "card",
    "status": "declined",
    "badge": "Card Debit",
    "title": "Purchase — GITHUB, INC.",
    "subtitle": "SAN FRANCISCO, CA, USA",
    "amount": -10.0,
    "currency": "USD",
    "date": "2026-01-19T08:35:26Z",
    "from": {
      "name": "Tafsir's USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_prod_docs/compressed/PERSON/p51865/profile_image/1000000177_v355d475b_v601797f0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-prod-bucket-storage%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T081026Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=060a3f834ddbcdd8d9cd8e73b4b8408041ad263eecbc17b5476ae64181bb2b25da8f71f5bf6ef8d49d7a47072b0969346ec1a0944c5ed00b01d0958f5b168a8b54af62b3eeb30230aa4e520f95a111394401531088fff4d93f96c4d4572c82a496d268c87fc2eff66422b7abcfaa1a0efb7fc816f8d6602c60597db05f5ecca9d91607263b450d20ef7475418c663f4196cda5df7049b1fb537184d2998580ebbe2b28abff26512365b6c7f7aef70ae4927e57c9b4d51cfcefa6cf2c46a8b09837ce4b74d0e33ed75ead04f752c2a0ddd087e813a0d065ac4e2a931d51aec5ae6f031c388947e613bc0bdb1efaf99221acb2e38f50d812dd00a3715f2853275a",
      "color": "#E2136E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Muhammad Tafsiruzzaman"
    },
    "to": {
      "name": "GITHUB, INC.",
      "color": "#117ACA",
      "kind": "merchant",
      "isSelf": false,
      "detail": "GITHUB, INC."
    },
    "reason": "Insufficient Funds — Transaction not permitted.",
    "accountNo": "111795426036",
    "dstAccountNo": "11199914216463",
    "merchant": {
      "name": "GITHUB, INC.",
      "location": "SAN FRANCISCO, CA, USA"
    }
  },
  {
    "id": "23681389",
    "rawType": "card",
    "status": "expired",
    "badge": "Card Debit",
    "title": "Purchase — GOOGLE *CHROME TEMP",
    "subtitle": "MOUNTAIN VIEW, CA, USA",
    "amount": 0.0,
    "currency": "USD",
    "date": "2026-01-19T08:34:48Z",
    "from": {
      "name": "Tafsir's USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_prod_docs/compressed/PERSON/p51865/profile_image/1000000177_v355d475b_v601797f0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-prod-bucket-storage%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T081026Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=060a3f834ddbcdd8d9cd8e73b4b8408041ad263eecbc17b5476ae64181bb2b25da8f71f5bf6ef8d49d7a47072b0969346ec1a0944c5ed00b01d0958f5b168a8b54af62b3eeb30230aa4e520f95a111394401531088fff4d93f96c4d4572c82a496d268c87fc2eff66422b7abcfaa1a0efb7fc816f8d6602c60597db05f5ecca9d91607263b450d20ef7475418c663f4196cda5df7049b1fb537184d2998580ebbe2b28abff26512365b6c7f7aef70ae4927e57c9b4d51cfcefa6cf2c46a8b09837ce4b74d0e33ed75ead04f752c2a0ddd087e813a0d065ac4e2a931d51aec5ae6f031c388947e613bc0bdb1efaf99221acb2e38f50d812dd00a3715f2853275a",
      "color": "#E2136E",
      "kind": "personal",
      "isSelf": true,
      "detail": "Muhammad Tafsiruzzaman"
    },
    "to": {
      "name": "GOOGLE *CHROME TEMP",
      "color": "#8A8A99",
      "kind": "merchant",
      "isSelf": false,
      "detail": "GOOGLE *CHROME TEMP"
    },
    "accountNo": "111795426036",
    "dstAccountNo": "11199914216463",
    "merchant": {
      "name": "GOOGLE *CHROME TEMP",
      "location": "MOUNTAIN VIEW, CA, USA"
    }
  },
  {
    "id": "2026491",
    "rawType": "USD to BDT transfer",
    "status": "expired",
    "badge": "International",
    "title": "International transfer · USD → BDT",
    "subtitle": "To account ···· 5935 · Bangladesh",
    "amount": 0.0,
    "currency": "USD",
    "date": "2026-03-04T06:23:18.539596Z",
    "from": {
      "name": "USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p1647/profile_image/c844adb1_914f_4237_85db_d501b4e8cb222858435453843806114_v25d51ae3_v4de2ad73.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T091044Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=43ac9243bca76db6e0545d8073d5c4679b2ee77384845880df3dde6be3d37e3543c08eee98583d6287de194a04063f54aa2cfee3a3cb3903dcf50a0427298c186cc0d74c3e5c94b9b6f243741c170c53d8253f27b9976da95af50c35ee4215598aca13c46661c59896602cf547aeefbc5e6fb19b05fcb5774def56cd5c01d15cf1fc1dcb9ccad68f9317210b3284d8ffd2745c230614d4718a57f8a79e559fa396421a5e209131dc5dd7f403d57c5cc487b6484f1ef415fd03217724570183429180c3135b97d68f61947e7411621e156b486205fcef4b61e8e330391cc67080c5a052eb0472fd06caa28c51f75077c0554117b8196eaa18c699bb3f1d750311",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Mr. Alex"
    },
    "to": {
      "name": "Mr. Alex",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p1647/profile_image/c844adb1_914f_4237_85db_d501b4e8cb222858435453843806114_v25d51ae3_v4de2ad73.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T091044Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=43ac9243bca76db6e0545d8073d5c4679b2ee77384845880df3dde6be3d37e3543c08eee98583d6287de194a04063f54aa2cfee3a3cb3903dcf50a0427298c186cc0d74c3e5c94b9b6f243741c170c53d8253f27b9976da95af50c35ee4215598aca13c46661c59896602cf547aeefbc5e6fb19b05fcb5774def56cd5c01d15cf1fc1dcb9ccad68f9317210b3284d8ffd2745c230614d4718a57f8a79e559fa396421a5e209131dc5dd7f403d57c5cc487b6484f1ef415fd03217724570183429180c3135b97d68f61947e7411621e156b486205fcef4b61e8e330391cc67080c5a052eb0472fd06caa28c51f75077c0554117b8196eaa18c699bb3f1d750311",
      "color": "#7A4A11",
      "kind": "personal",
      "isSelf": false,
      "detail": "Mr. Alex"
    },
    "accountNo": "101056624657482",
    "dstAccountNo": "Mr. Alex, 2229095141315935 (BDT Account)"
  },
  {
    "id": "2026482",
    "rawType": "USD to BDT transfer",
    "status": "expired",
    "badge": "International",
    "title": "International transfer · USD → BDT",
    "subtitle": "To account ···· 5935 · Bangladesh",
    "amount": 0.0,
    "currency": "USD",
    "date": "2026-03-04T06:18:30.62371Z",
    "from": {
      "name": "USD Account",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p1647/profile_image/c844adb1_914f_4237_85db_d501b4e8cb222858435453843806114_v25d51ae3_v4de2ad73.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T091044Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=43ac9243bca76db6e0545d8073d5c4679b2ee77384845880df3dde6be3d37e3543c08eee98583d6287de194a04063f54aa2cfee3a3cb3903dcf50a0427298c186cc0d74c3e5c94b9b6f243741c170c53d8253f27b9976da95af50c35ee4215598aca13c46661c59896602cf547aeefbc5e6fb19b05fcb5774def56cd5c01d15cf1fc1dcb9ccad68f9317210b3284d8ffd2745c230614d4718a57f8a79e559fa396421a5e209131dc5dd7f403d57c5cc487b6484f1ef415fd03217724570183429180c3135b97d68f61947e7411621e156b486205fcef4b61e8e330391cc67080c5a052eb0472fd06caa28c51f75077c0554117b8196eaa18c699bb3f1d750311",
      "color": "#5B3A8C",
      "kind": "personal",
      "isSelf": true,
      "detail": "Mr. Alex"
    },
    "to": {
      "name": "Mr. Alex",
      "imageUrl": "https://storage.googleapis.com/priyo_pay_dev_docs/compressed/PERSON/p1647/profile_image/c844adb1_914f_4237_85db_d501b4e8cb222858435453843806114_v25d51ae3_v4de2ad73.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=priyo-pay-dev-ovh%40priyo-pay.iam.gserviceaccount.com%2F20260511%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260511T091044Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=43ac9243bca76db6e0545d8073d5c4679b2ee77384845880df3dde6be3d37e3543c08eee98583d6287de194a04063f54aa2cfee3a3cb3903dcf50a0427298c186cc0d74c3e5c94b9b6f243741c170c53d8253f27b9976da95af50c35ee4215598aca13c46661c59896602cf547aeefbc5e6fb19b05fcb5774def56cd5c01d15cf1fc1dcb9ccad68f9317210b3284d8ffd2745c230614d4718a57f8a79e559fa396421a5e209131dc5dd7f403d57c5cc487b6484f1ef415fd03217724570183429180c3135b97d68f61947e7411621e156b486205fcef4b61e8e330391cc67080c5a052eb0472fd06caa28c51f75077c0554117b8196eaa18c699bb3f1d750311",
      "color": "#7A4A11",
      "kind": "personal",
      "isSelf": false,
      "detail": "Mr. Alex"
    },
    "accountNo": "101056624657482",
    "dstAccountNo": "Mr. Alex, 2229095141315935 (BDT Account)"
  }
];
