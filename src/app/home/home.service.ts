import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getLiveWebinarData() {
    return [
      { img: 'assets/image/image1.png', title: ' Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthama from', creditPoint: { total: 2, expiry: null, color: null }, highlights: 'Manage chronic and complex diseases', org: { name: 'PDGI Indonesia', img: 'assets/icon/pdgiOrg.png' } },
      { img: 'assets/image/image2.png', title: 'Virus is like any other respiratory virus that causes common', creditPoint: { total: 1.5, expiry: "23h 30m", color: 'red' }, highlights: 'Manage chronic and complex diseases', org: { name: 'GSK', img: 'assets/icon/gsk.png' } },
      { img: 'assets/image/image3.png', title: ' Virus is like any other respiratory virus that causes common',creditPoint: { total: 2, expiry: null, color: null }, highlights: 'Manage chronic and complex diseases', org: { name: 'Bayer', img: 'assets/icon/bayer.png' } }
    ]
  }

  getUpcomingWebinarData() {
    return [
      { img: '', title: 'The Covid19 Management of Parox Health caretine', creditPoint: { total: 1.5, expiry: '20 days', color: null }, highlights: 'Manage chronic and complex diseases', org: { name: 'PDGI Indonesia', img: 'assets/icon/pdgiOrg.png' }, liveOn: '7 Jan 2025, 12:30 PM' },
      { img: '', title: 'Perspectives in The Covid19 Management of Parox Health', creditPoint: { total: 2, expiry: null, color: null }, highlights: 'Manage chronic and complex diseases', org: { name: 'PDGI Indonesia', img: 'assets/icon/pdgiOrg.png' }, liveOn: '7 Jan 2025, 12:30 PM' },
      { img: '', title: 'The Covid19 Management of Parox Health caretine', creditPoint: { total: 2, expiry: null, color: null }, highlights: 'Manage chronic and complex diseases', org: { name: 'PDGI Indonesia', img: 'assets/icon/pdgiOrg.png' }, liveOn: '7 Jan 2025, 12:30 PM' }
    ]
  }

  getPrevViewedVideos() {
    return [
      { img: 'assets/image/continueWatching.png', title: 'New Perspectives in The Covid19 Management', duration:'24:50',org:'Pfizer Indonesia',timeLeft:'10 min' },
      { img: 'assets/image/continueWatching1.png', title: 'Perspectives in The Covid19 Management ', duration:'24:50',org:'Bayer',timeLeft:'10 min' },
      { img: 'assets/image/continueWatching1.png', title: 'New Perspective in The 12', duration:'24:50',org:'Bayer',timeLeft:'10 min' },
      { img: 'assets/image/continueWatching1.png', title: 'New Perspective in The 12', duration:'24:50',org:'Bayer',timeLeft:'10 min' },
      { img: 'assets/image/continueWatching1.png', title: 'New Perspective in The 12', duration:'24:50',org:'Bayer',timeLeft:'10 min' }
    ]
  }

  getTopSpeakersData() {
      return [
        { img: 'assets/image/doctor.png', name: 'Dr Chong wui', occupation:'Gastrologist, General Phys...',isLive:true },
        { img: 'assets/image/doctor.png', name: 'Dr Wuyama Guramg', occupation:'Gastroenterologist, Surgeon',isLive:false},
        { img: 'assets/image/doctor.png', name: 'Dr Wuyama Guramg', occupation:'Gastroenterologist, Surgeon',org:'Bayer',isLive:false },
        { img: 'assets/image/doctor.png', name: 'Dr Wuyama Guramg', occupation:'postiologist',org:'Bayer',isLive:false },
        { img: 'assets/image/doctor.png', name: 'Dr Shanya suian', occupation:'Orthodontist',org:'Bayer',isLive:false }
      ]
  }

  getTopicList() {
    return [
      {topic:'postiologist',count:4},
      {topic:'Emergency',count:2},
      {topic:'General Medicine',count:9},
      {topic:'General Medicine',count:4},
      {topic:'Emergency Medicine',count:8},
      {topic:'General Medicine',count:4},
      {topic:'Emergency',count:4},
      {topic:'Emergency Medicine',count:8},
      {topic:'postiologist',count:4},
      {topic:'General Medicine',count:9},
      {topic:'General Medicine',count:4},
      {topic:'Emergency',count:2},
    ]
  }

  getSpecialityList() {
    return ['Accupunture','Allergy and Immunology','Anaesthesiology','Clinical Nutrition','General Practitioner'];
  }

  getWebinarByTopic() {
    return [
      { img: 'assets/image/topic.png', title: 'Perspectives in The Covid19 Management of Parox Health caretine', creditPoint: { total: 1.5, expiry: '23h 30m', color: null }, highlights: 'Manage chronic and complex diseases', org: { name: 'PDGI Indonesia', img: 'assets/icon/pdgiOrg.png' },sponsoredBy:'Roche',followers:2348,lastActive:'30 min ago',likes:250,comment:12,views:750},
      { img: 'assets/image/topic2.png', title: 'New Perspectives in The Covid19 Management of Parox Health caretine', creditPoint: { total: 2, expiry: '12 days', color: null }, highlights: 'Manage chronic and complex diseases', org: { name: 'PDGI Indonesia', img: 'assets/icon/pdgiOrg.png' },sponsoredBy:'Roche',followers:2348,lastActive:'30 min ago',likes:250,comment:12,views:750},
      { img: 'assets/image/topic3.png', title: 'New Perspectives in The Covid19 Management of Parox Health caretine', creditPoint: { total: 2, expiry: null, color: null }, highlights: 'Manage chronic and complex diseases', org: { name: 'PDGI Indonesia', img: 'assets/icon/pdgiOrg.png' },sponsoredBy:'Roche',followers:2348,lastActive:'30 min ago',likes:250,comment:12,views:750},
      { img: 'assets/image/topic4.png', title: 'The Covid19 Management of Parox Health caretine', creditPoint: { total: 3, expiry: '12 days', color: null }, highlights: 'Manage chronic and complex diseases', org: { name: 'PDGI Indonesia', img: 'assets/icon/pdgiOrg.png' },sponsoredBy:'Roche',followers:2348,lastActive:'30 min ago',likes:250,comment:12,views:750}
    ]
  }
}
