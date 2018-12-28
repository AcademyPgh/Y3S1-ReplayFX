// import React, { Component } from 'react';
// import {
//   AsyncStorage,
// } from 'react-native';
// import axios from 'axios';
// import { apiGetConventionList, persistPrefix } from '../../config';

// import Loading from './Loading';

// const persistKey = persistPrefix + "conventionList";
// const url = apiGetConventionList;

// export default class ConventionListLoader extends React.Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       err: null,
//     }

//     this.debug = false;
//     this.currentRetry = 0;
//     this.maxRetries = 3;
//     this.mounted = false;

//     this.loadConventions = this.loadConventions.bind(this);
//     this.handleConventionsLoaded = this.handleConventionsLoaded.bind(this);
//     this.handleRequestFailed = this.handleRequestFailed.bind(this);
//     this.fetchData = this.fetchData.bind(this);

//     this.fetchData();
//   }

//   handleConventionsLoaded(conventionList) {
//     if (conventionList) {
//       this.persistData(conventionList);
//       this.props.conventionsLoaded(conventionList);
//     } else {
//       this.handleRequestFailed("Unknown error.");
//     }
//   }

//   handleRequestFailed(error) {
//     if (this.mounted) {
//         this.setState({err: error});
//     } else {
//         //auto-retry
//         this.currentRetry++;
//         if (this.currentRetry <= this.maxRetries) {
//           setTimeout(this.loadConventions, 5000);
//         }
//     }
//   }

//   componentWillMount() {
//     this.mounted = true;
//   }

//   componentWillUnmount() {
//     this.mounted = false;
//   }

//   persistData(conventionList) {
//       AsyncStorage.setItem(persistKey, JSON.stringify(conventionList));
//   }

//   fetchData() {
//     AsyncStorage.getItem(persistKey)
//       .then((conventionList) => {
//         if (this.mounted) {
//             this.setState({localConventionList: conventionList});
//         }
//       }).catch((err) => {
//         //Alert.alert(err);
//       });
//   }

//   componentDidMount()
//   {
//     this.loadConventions();
//   }

//   loadConventions() {
//     if (this.mounted) {
//       this.setState({err: null});
//     }

//     axios.get(url, {timeout: 10000})
//         .then((result) => {
//             this.handleConventionsLoaded(result);
//         })
//         .catch((error) => { 
//             this.handleRequestFailed(error);
//         });
//   }

//   render() {
//     if (this.state.err) {
//       return (
//           <Loading err={this.state.err} onRetry={this.loadConventions} />
//       );
//     } else {
//       return <Loading />;
//     }
//   }
  
// }