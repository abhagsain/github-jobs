(window.webpackJsonpjobgithub=window.webpackJsonpjobgithub||[]).push([[0],{10:function(e,t,a){},20:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=(a(10),a(7)),s=a(2),i=a(3),u=a(5),m=a(4),h=a(6),f=r.a.createContext({jobs:[],searchedText:"",loading:!0,error:{status:!1,message:""},filterValue:"",onSearched:function(e){},onFilterChange:function(){}}),d=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).searchInput=null,a.disableButton=function(){var e=a.context,t=e.searchedText,n=e.type,r=e.location;return""===t.trim()&&""===n.trim()&&""===r.trim()},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.searchInput.focus()}},{key:"render",value:function(){var e=this,t=this.context,a=t.searchedText,n=t.onSearched,l=t.onSubmit,c=t.onTextChanged,o=t.location,s=t.clearSearch,i="text-white font-bold text-xl py-2 px-4 rounded w-full bg-blue-900 ",u=this.disableButton()?i.concat("opacity-75  cursor-not-allowed"):i.concat("active:bg-red-100 active:bg-blue-800 shadow-2xl hover:shadow-xl active:shadow");return r.a.createElement("div",{className:"w-full max-w-xl p-5 lg:p-0"},r.a.createElement("form",{onSubmit:function(){return e.disableButton()?function(){}:l()}},r.a.createElement("div",{className:"w-full"},r.a.createElement("input",{value:a,type:"text",name:"searchedText",onChange:n,onSubmit:l,className:"shadow-xl appearance-none rounded py-4 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-2xl hover:shadow-2xl inline w-full",placeholder:"eg. Senior React Developer",ref:function(t){e.searchInput=t}})),r.a.createElement("div",{className:"w-full flex justify-between"},r.a.createElement("input",{name:"location",value:o,type:"text",onChange:c,className:"shadow-xl appearance-none rounded py-4 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-2xl hover:shadow-2xl inline w-full",placeholder:"eg. New York"})),r.a.createElement("div",{className:"text-center mt-5"},r.a.createElement("button",{disabled:this.disableButton(),onClick:l,className:u},"Search"),r.a.createElement("button",{onClick:s,className:"text-gray-200 font-bold text-xl py-2 px-4 rounded w-full bg-gray-500 shadow-xl hover:shadow-xl active:shadow active:text-white active:bg-gray-600  mt-5"},"Clear Search"))))}}]),t}(n.Component);d.contextType=f;var p={height:"70vh"};function g(){return r.a.createElement("div",{style:p,className:"bg-white flex justify-center items-center"},r.a.createElement(d,null))}function b(e){var t=e.data,a=t.title,n=t.type,l=t.company,c=t.url,o=t.location,s=t.company_url;return r.a.createElement("div",{className:"shadow-md  bg-white p-5 border-b"},r.a.createElement("a",{href:c,target:"_blank",className:"text-xl lg:text-2xl font-semibold hover:underline"},a),r.a.createElement("div",{className:"flex justify-between"},r.a.createElement("div",{className:"w-2/3"},r.a.createElement("div",{className:"flex mt-2"},r.a.createElement("a",{href:s,target:"_blank",className:"text-sm lg:text-base hover:underline"},l),r.a.createElement("p",{className:"ml-5 text-green-800 font-bold text-sm lg:text-base"},n))),r.a.createElement("div",{className:"1/3 self-end justify-end text-sm lg:text-base"},o)))}function x(){return r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}function v(e){for(var t=e.totalPosts,a=e.postsPerPage,n=[],l=1;l<=Math.ceil(t/a);l++)n.push(l);return r.a.createElement("div",{className:"my-10"},r.a.createElement(f.Consumer,null,(function(e){return r.a.createElement("nav",{className:"bg-white flex items-center justify-between w-full"},r.a.createElement("ul",{className:"flex justify-center py-5 w-full justify-around lg:justify-start"},n.map((function(t){var a="px-4 lg:px-3 py-1 self-center rounded lg:mx-5 text-xl font-bold flex ",n=t===e.pagination.currentPage?a.concat("  text-white bg-blue-500"):a.concat(" bg-white");return r.a.createElement("li",{key:t,className:n},r.a.createElement("a",{href:"#!",onClick:function(){return e.paginate(t)}},t))}))))})))}var y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).filterSearches=function(e,t){return e.filter((function(e){var a=e.title.toLowerCase(),n=e.type.toLowerCase(),r=e.location.toLowerCase(),l=t.toLowerCase();return a.includes(l)||n.includes(l)||r.includes(l)}))},a.showNoResults=function(e,t){return e&&0===e.length&&r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",{className:"text-4xl py-5"},"No Result ",t&&" for ",t&&r.a.createElement("p",{className:"text-gray-600 inline"},t),r.a.createElement("small",{className:"block text-base mt-3"},t&&"Clear filter to see all the results",!t&&"Search a broader term. Example React Developer ")))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.context,t=e.jobs,a=e.loading,n=e.filterValue,l=e.pagination,c=l.currentPage,o=l.postPerPage,s=e.onFilter,i=e.error,u=c*o,m=u-o,h=this.filterSearches(t,n),f=h.slice(m,u);return r.a.createElement("div",{className:"flex flex-col justify-center items-center my-10 mx-5"},a?r.a.createElement(x,null):r.a.createElement(r.a.Fragment,null,!i.status&&r.a.createElement("div",{className:"w-full xl:w-2/3"},r.a.createElement("div",{className:"flex flex-col lg:flex-row justify-between my-5"},r.a.createElement("h2",{className:"text-4xl my-5 text-gray-800 "},"Explore",r.a.createElement("small",{className:"text-sm block"},f.length," results on this page")),r.a.createElement("input",{type:"text",value:n,onChange:s,className:"shadow appearance-none rounded py-4 px-6 text-gray-700  \r leading-tight focus:outline-none focus: inline w-full lg:w-2/3 self-center",placeholder:"Filter Searches eg. Engineer or Remote or Berlin etc"})),f.length>0&&r.a.createElement(v,{totalPosts:h.length,postsPerPage:o}),f&&f.map((function(e){return r.a.createElement(b,{key:e.id,data:e})})),f&&0===f.length&&r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",{className:"text-4xl py-5"},"No Result ",n&&" for ",n&&r.a.createElement("p",{className:"text-gray-600 inline"},n),r.a.createElement("small",{className:"block text-base mt-3"},n&&"Clear filter to see all the results",!n&&"Search a broader term. Example React Developer ")))),i.status&&r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",{className:"text-4xl py-5"},"Oops! Something went wrong",r.a.createElement("small",{className:"block text-base mt-3"},"Please refresh the page"))),r.a.createElement("nav",{className:"flex bg-gray-900 text-white py-3 px-10 items-baseline justify-between my-10 rounded"},r.a.createElement("a",{href:"https://twitter.com/BhagsainAnurag",className:"sm:text-2xl font-bold hover:underline",target:"_blank"},"Made with \u2665 by Anurag Bhagsain"))))}}]),t}(n.Component);y.contextType=f;var w=a(8),E=a.n(w);function j(){return r.a.createElement("nav",{className:"flex w-full bg-gray-900 text-white py-6 px-10 items-baseline justify-between"},r.a.createElement("a",{href:"#",className:"text-2xl font-bold"},"Github Jobs"),r.a.createElement("a",{href:"https://github.com/abhagsain/githubjobsapi",target:"_blank",className:"text-base opacity-75"},"View on Github"))}function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={jobs:[],searchedText:"",loading:!0,error:{status:!1,message:""},filterValue:"",filteredJobs:[],location:"",type:"",pagination:{currentPage:1,postPerPage:10}},a.onSearched=function(e){var t=e.target.value;a.setState({searchedText:t})},a.onTextChanged=function(e){var t=e.target;a.setState(Object(o.a)({},t.name,t.value))},a.onFilter=function(e){var t=e.target.value;a.setState({filterValue:t,pagination:S({},a.state.pagination,{currentPage:1})})},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.searchedText,r=t.location;if(n&&n.trim()||r&&r.trim()){a.setState({loading:!0});var l={description:n};r&&r.trim()&&(l.location=r),E.a.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json",{params:l}).then((function(e){var t=e.data;a.setState({jobs:t,loading:!1,pagination:S({},a.state.pagination,{currentPage:1})})})).catch((function(e){a.setState({loading:!1,searchedText:"",location:"",error:{message:e.message,status:!0}})}))}},a.clearSearch=function(){var e=a.state,t=e.searchedText,n=e.location;(t||n)&&a.setState({searchedText:"",location:""})},a.paginate=function(e){a.setState({pagination:S({},a.state.pagination,{currentPage:e})})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json").then((function(t){var a=t.data;e.setState({jobs:a,loading:!1})})).catch((function(t){e.setState({loading:!1,searchedText:"",location:"",error:{message:t.message,status:!0}})}))}},{key:"render",value:function(){return r.a.createElement(f.Provider,{value:S({},this.state,{onSubmit:this.onSubmit,onSearched:this.onSearched,onFilter:this.onFilter,onTextChanged:this.onTextChanged,clearSearch:this.clearSearch,paginate:this.paginate})},r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(g,null),r.a.createElement(y,null)))}}]),t}(r.a.Component);c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.fc43f2ad.chunk.js.map