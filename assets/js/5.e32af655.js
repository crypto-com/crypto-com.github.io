(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{353:function(e,t,a){e.exports=a.p+"assets/img/big_pic.320c152d.png"},354:function(e,t,a){e.exports=a.p+"assets/img/azure_setup_1.e1adf990.png"},355:function(e,t,a){e.exports=a.p+"assets/img/azure_setup_2.1930b0fc.png"},356:function(e,t,a){e.exports=a.p+"assets/img/intel_sub.37c7f320.png"},372:function(e,t,a){"use strict";a.r(t);var n=a(42),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"getting-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),n("p",[e._v("::: warning Caution\nThis page is for the development environment set up only, and it is subject to changes.")]),e._v(" "),n("p",[e._v("For anyone interested in joining the Crypto.com chain testnet,\nplease refer to our "),n("a",{attrs:{href:"./thaler-testnet"}},[e._v("testnet documentation")]),e._v(".\n:::")]),e._v(" "),n("p",[e._v("By following this tutorial, you can compile and run the latest version of Crypto.com Chain from scratch.\nWith supported hardware, you can run the chain locally within a cup of coffee ☕. However, this document aims\nto provide you with a step-by-step guide to run Crypto.com Chain locally and not a guide for\nproduction usage.")]),e._v(" "),n("h2",{attrs:{id:"pre-requisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites"}},[e._v("#")]),e._v(" Pre-requisites")]),e._v(" "),n("p",[e._v("Because we utilize the technology of "),n("code",[e._v("Intel® Software Guard Extensions (Intel® SGX)")]),e._v("\nfor "),n("RouterLink",{attrs:{to:"/getting-started/transaction-privacy.html#motivation"}},[e._v("payment data confidentiality")]),e._v(", the pre-requisites are a little more strict than the other\nchains' setup. A special type of hardware is needed and the reference of "),n("a",{attrs:{href:"https://github.com/ayeks/SGX-hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("SGX-hardware"),n("OutboundLink")],1),e._v("\ncould help you identify if your current hardware supports "),n("code",[e._v("Intel® SGX")]),e._v(" or not.")],1),e._v(" "),n("p",[e._v("If your development machine does not support SGX, we recommend spinning up a cloud instance listed in the "),n("a",{attrs:{href:"https://github.com/ayeks/SGX-hardware#cloud-vendors",target:"_blank",rel:"noopener noreferrer"}},[e._v("above reference"),n("OutboundLink")],1),e._v(". In this guide, we will walk through the process of setting it up on "),n("a",{attrs:{href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/microsoft-azure-compute.acc-virtual-machine-v2?tab=overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Confidential Compute VM"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"a-bird-s-eye-view"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#a-bird-s-eye-view"}},[e._v("#")]),e._v(" A bird's-eye view")]),e._v(" "),n("p",[e._v("Before diving into details, we would like to introduce you the big picture of Crypto.com Chain's main components as following:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(353),alt:""}})]),e._v(" "),n("p",[e._v("At the end of this getting-start document, you will be running four components:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("chain-abci")]),e._v(" as main chain process.")]),e._v(" "),n("li",[n("code",[e._v("client-rpc")]),e._v(" as rpc server for client's interactions.")]),e._v(" "),n("li",[n("code",[e._v("tendermint")]),e._v(" for consensus.")]),e._v(" "),n("li",[n("code",[e._v("tx-query-app")]),e._v(" allows semi-trusted client querying of sealed tx payloads.")])]),e._v(" "),n("h2",{attrs:{id:"azure-vm-creation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#azure-vm-creation"}},[e._v("#")]),e._v(" Azure VM creation")]),e._v(" "),n("p",[e._v("Get into the portal of Azure computing and create a new "),n("a",{attrs:{href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/microsoft-azure-compute.acc-virtual-machine-v2?tab=overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Confidential Compute VM"),n("OutboundLink")],1),e._v(" as following config. Noted that "),n("code",[e._v("Ubuntu Server 18.04")]),e._v(" is recommended.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(354),alt:""}})]),e._v(" "),n("p",[e._v("Make sure to enable SSH public inbound ports:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(355),alt:""}})]),e._v(" "),n("p",[e._v("Then choose your desirable VM "),n("code",[e._v("location")]),e._v(", "),n("code",[e._v("size")]),e._v(", "),n("code",[e._v("storage")]),e._v(" and "),n("code",[e._v("network configs")]),e._v(", or you can leave\nthem as default.")]),e._v(" "),n("h2",{attrs:{id:"vm-environment-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vm-environment-setup"}},[e._v("#")]),e._v(" VM environment setup")]),e._v(" "),n("p",[e._v("SSH to the Azure VM, and start the environment setup for Crypto.com Chain.")]),e._v(" "),n("ul",[n("li",[e._v("Install "),n("code",[e._v("Docker")]),e._v(": you can refer to following document "),n("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04",target:"_blank",rel:"noopener noreferrer"}},[e._v("How To Install and Use Docker on Ubuntu 18.04\n"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("Make sure you have complete the part of "),n("code",[e._v("Executing the Docker Command Without Sudo")]),e._v(" by:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("sudo usermod -aG docker ${USER}\n")])])]),n("ul",[n("li",[e._v("Install build dependencies")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("sudo apt install build-essential\n")])])]),n("ul",[n("li",[e._v("Clone the main chain repo")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("git clone https://github.com/crypto-com/chain.git\n")])])]),n("h2",{attrs:{id:"build-binary-and-docker-images"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#build-binary-and-docker-images"}},[e._v("#")]),e._v(" Build binary and Docker images")]),e._v(" "),n("h4",{attrs:{id:"_1-build-the-crypto-com-chain-binary-files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-build-the-crypto-com-chain-binary-files"}},[e._v("#")]),e._v(" 1. Build the Crypto.com Chain binary files:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ cd chain/\n$ make build\n")])])]),n("p",[e._v("It will take you several minutes, and check the binary files share object files in following directory:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ ls target/debug/\n\nchain-abci client-rpc client-cli tx-query-app ...\n")])])]),n("h4",{attrs:{id:"_2-build-the-docker-image-with-local-binary-files-using-following-command"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-build-the-docker-image-with-local-binary-files-using-following-command"}},[e._v("#")]),e._v(" 2. Build the docker image with local binary files using following command:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ make image\n")])])]),n("p",[e._v("Check the current built image with:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ docker images\n\nREPOSITORY              TAG                 IMAGE ID            CREATED             SIZE\ncrypto-chain            develop             817f6c7c7a76        - seconds ago      940MB\n")])])]),n("h2",{attrs:{id:"prepare-spid-key"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prepare-spid-key"}},[e._v("#")]),e._v(" Prepare SPID & KEY")]),e._v(" "),n("p",[e._v("Before kicking off all the components, there is one more step to go, which is\nregistering your own accessing ID and KEY for Intel SGX attestation service.")]),e._v(" "),n("p",[e._v(":::tip Enhanced Privacy ID (EPID)\nThe Intel SGX attestation service is a public web service operated by Intel for client-based privacy focused usages on PCs or workstations. The primary responsibility of the Intel SGX attestation service is to verify attestation evidence submitted by relying parties. The Intel SGX attestation service utilizes Enhanced Privacy ID (EPID) provisioning, in which an Intel processor is given a unique signing key belonging to an EPID group. During attestation, the quote containing the processor’s provisioned EPID signature is validated, establishing that it was signed by a member of a valid EPID group. A commercial use license is required for any SGX application running in production mode accessing the Intel SGX attestation service.\n:::")]),e._v(" "),n("p",[e._v("In short, you should go to "),n("a",{attrs:{href:"https://api.portal.trustedservices.intel.com/EPID-attestation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel Portal"),n("OutboundLink")],1),e._v("\nto sign up for the ID and KEY. It won't take you more than 5 minutes.")]),e._v(" "),n("p",[e._v("Make sure what your subscription is "),n("a",{attrs:{href:"https://api.portal.trustedservices.intel.com/Products/dev-intel-software-guard-extensions-attestation-service-unlinkable",target:"_blank",rel:"noopener noreferrer"}},[e._v("DEV Intel® Software Guard Extensions Attestation Service (Unlinkable)"),n("OutboundLink")],1),e._v(". Your "),n("code",[e._v("SPID")]),e._v(" and "),n("code",[e._v("Primary key")]),e._v(" will be shown on the portal as below:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(356),alt:""}})]),e._v(" "),n("p",[e._v("After you obtained your "),n("code",[e._v("SPID")]),e._v(" and "),n("code",[e._v("Primary key")]),e._v(" from Intel, you should embed them to your "),n("code",[e._v(".profile")]),e._v(" file\nas environment variables with the other two variables ("),n("code",[e._v("SGX_MODE")]),e._v(", "),n("code",[e._v("NETWORK_HEX_ID")]),e._v(") we mentioned above. So, make sure append\nthe following lines in your "),n("code",[e._v(".profile")]),e._v(" file.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export SPID={YOUR_SPID}\nexport IAS_API_KEY={YOUR_PRIMARY_KEY}\n")])])]),n("p",[e._v("Surely, remember to source the new "),n("code",[e._v(".profile")]),e._v(" file:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ source ~/.profile\n")])])]),n("h2",{attrs:{id:"prepare-environment-to-run-the-chain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prepare-environment-to-run-the-chain"}},[e._v("#")]),e._v(" Prepare environment to run the chain")]),e._v(" "),n("p",[e._v("Prepare initial chain data and try to install Intel SGX if the SGX device is not ready.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ sudo make create-path\n$ sudo make chown-path user=$(id -u) group=$(id -g)\n$ make prepare\n")])])]),n("h2",{attrs:{id:"run-chain-components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#run-chain-components"}},[e._v("#")]),e._v(" Run chain components")]),e._v(" "),n("p",[e._v("Run all the components of Cryto.com Chain with following command:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ make run TX_QUERY_HOSTNAME={YOUR_INSTANCE_HOSTNAME}\n")])])]),n("p",[e._v("Depending on where you will run your wallet in the next step, "),n("code",[e._v("{YOUR_INSTANCE_HOSTNAME}")]),e._v(" can have different values:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Wallet Location")]),e._v(" "),n("th",[n("code",[e._v("{YOUR_INSTANCE_HOSTNAME}")])])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("In the same Azure machine")]),e._v(" "),n("td",[n("code",[e._v("127.0.0.1")])])]),e._v(" "),n("tr",[n("td",[e._v("Remote (e.g. from your computer)")]),e._v(" "),n("td",[e._v("Azure instance IP address")])]),e._v(" "),n("tr",[n("td",[e._v("Inside the node Docker network")]),e._v(" "),n("td",[e._v("Ignore "),n("code",[e._v("TX_QUERY_HOSTNAME")])])])])]),e._v(" "),n("p",[e._v("Then you can check if all containers are running normally:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('$ docker ps\n\nCONTAINER ID     IMAGE                           COMMAND                  CREATED STATUS   PORTS                                  NAMES\nfc51af59593b     crypto-chain:develop            "client-rpc --port=2…"   -       -        0.0.0.0:26659->26659/tcp               client-rpc\nbc586070744b     crypto-chain:develop            "chain-abci --chain_…"   -       -                                               chain-abci\nade1db657cd8     tendermint/tendermint:v0.32.8   "/usr/bin/tendermint…"   -       -        0.0.0.0:26656-26657->26656-26657/tcp   tendermint\n800f173dccc7     crypto-chain:develop            "bash ./run_tx_query…"   -       -        0.0.0.0:26651->26651/tcp               sgx-query\n')])])]),n("p",[e._v("Besides, you can check the chain-abci and Tendermint status by following commands:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('$ docker logs -f chain-abci\n[-T08:50:02Z INFO  chain_abci::app] received beginblock request\n[-T08:50:02Z INFO  chain_abci::app] received endblock request\n[-T08:50:02Z INFO  chain_abci::app] received commit request\n[-T08:50:03Z INFO  chain_abci::app] received beginblock request\n[-T08:50:03Z INFO  chain_abci::app] received endblock request\n[-T08:50:03Z INFO  chain_abci::app] received commit request\n...\n\n$ curl \'http://localhost:26657/health\'\n{\n  "jsonrpc": "2.0",\n  "id": "",\n  "result": {}\n}\n')])])]),n("p",[e._v("Congratulations! Crypto.com Chain is now running on your machine!")]),e._v(" "),n("h4",{attrs:{id:"re-initialize-a-crypto-com-chain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#re-initialize-a-crypto-com-chain"}},[e._v("#")]),e._v(" Re-initialize a Crypto.com Chain")]),e._v(" "),n("p",[e._v("If you need to stop the processes and initialize a new chain, firstly you should stop all\nservice and remove docker containers by:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ make stop-all\n$ make rm-all\n")])])]),n("p",[e._v("And then clean all the storage used by Tendermint, Cryto.com Chain by:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ make clean-data\n")])])]),n("p",[e._v("Finally you can initialize a new chain by:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ sudo make create-path\n$ sudo make chown-path user=$(id -u) group=$(id -g)\n$ make prepare\n$ make run\n")])])]),n("p",[e._v("If no error Check all containers")]),e._v(" "),n("h3",{attrs:{id:"congratulations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#congratulations"}},[e._v("#")]),e._v(" Congratulations")]),e._v(" "),n("p",[e._v("Congratulations, now the environment to run Crypto.com Chain is all set. Let's on on and start "),n("a",{attrs:{href:"./send_your_first_transaction"}},[e._v("sending your first transaction")]),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);