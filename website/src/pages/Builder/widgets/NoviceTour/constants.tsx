import type { Steps } from './types';

/** 组件名称, 前缀 */
export const CLS_PREFIX = 'li-editor-novice-tour';

export const DefaultSteps: Steps[] = [
  {
    key: 1,
    title: '添加数据集',
    status: 'process',
    menu: 'datasets',
  },
  {
    key: 2,
    title: '添加可视化图层',
    status: 'wait',
    menu: 'layers',
  },
  // TODO 配置地图控件
  // {
  //   key: 3,
  //   title: '地图控件',
  //   status: 'wait',
  //   menu: 'widgets',
  // },
  {
    key: 3,
    title: '地图导出分享',
    status: 'wait',
    menu: 'widgets',
  },
  {
    key: 4,
    title: '用户指南',
    status: 'wait',
    menu: 'widgets',
  },
];

export const TourSteps = [
  {
    title: '添加数据集',
    key: 'LITourAddDataset',
    target: () => document.getElementById('LITourAddDataset'),
  },
  {
    title: '添加可视化图层',
    key: 'LITourAddVisualLayer',
    target: () => document.getElementById('LITourAddVisualLayer'),
  },
  // {
  //   title: '添加地图控件',
  //   key: 'LITourAddAnalysisWidget',
  //   target: () => document.getElementById('LITourAddAnalysisWidget'),
  // },
  {
    title: '完成地图制作，导出分享',
    key: 'LITourExportApp',
    target: () => document.getElementById('LITourExportApp'),
  },
  {
    title: '阅读手册，快速入门',
    key: 'LITourDocs',
    target: () => document.getElementById('LITourDocs'),
  },
];

export const NoviceTourSvg = () => (
  <svg width="15px" height="15px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M4.9678489,1.3826075 C8.31012853,-0.576268489 12.3192184,-0.389784816 15.3790084,1.53808248 C15.4935937,1.61192055 15.4928733,1.78214939 15.3736444,1.85395109 L14.0978957,2.62222925 C13.9886026,2.68804748 13.8520304,2.6948292 13.7386066,2.63646258 C13.1905076,2.36282194 12.6137116,2.14958565 12.010593,2.00071416 C10.970607,1.74569518 9.90840342,1.69271707 8.85335106,1.84565472 C7.76136852,2.00466142 6.72177749,2.37737642 5.76595952,2.9529867 C4.8081544,3.52979367 3.99373676,4.27359505 3.34100375,5.16528653 C2.71095499,6.0271462 2.25895212,6.99200586 1.99536933,8.03205673 C1.73178655,9.0721076 1.67339792,10.1341255 1.82105473,11.187951 C1.97142175,12.2778767 2.33903402,13.315133 2.90887125,14.265643 C3.47870848,15.2161529 4.21990448,16.0284306 5.1094904,16.6731857 C5.96854603,17.2985945 6.93155125,17.7455112 7.97153725,18.0005301 C9.01152326,18.2555491 10.0737268,18.3085272 11.1287792,18.1555896 C12.2207617,17.9965829 13.2603528,17.6238679 14.2161707,17.0482576 C15.1739759,16.4714506 15.9883935,15.7276492 16.6411265,14.8359578 C17.2711753,13.9740981 17.7231781,13.0092384 17.9867609,11.9691876 C18.1407455,11.3643753 18.2236826,10.7538363 18.2379463,10.141531 C18.2429514,10.0145396 18.3098682,9.89608148 18.4191613,9.83026326 L19.6949101,9.0619851 C19.8121518,8.99138009 19.9644417,9.06946342 19.9737082,9.20672633 C20.2394918,12.8576204 18.4818538,16.5304041 15.1196034,18.5552174 C10.3683304,21.4165096 4.21533345,19.8960401 1.38906036,15.1593382 C-1.43467549,10.4264989 0.189300038,4.18486864 4.9678489,1.3826075 Z M16.3466891,4.95062607 L17.7876947,5.02614597 C17.9874077,5.03661249 18.0919786,5.27522166 17.9665,5.43555412 L10.2347711,14.5486992 C9.81543005,15.0841339 9.00736079,15.0417848 8.64628512,14.4654502 L5.09928324,8.83771232 C4.99125133,8.6651421 5.12018635,8.43885722 5.31989928,8.44932373 L6.76090492,8.52484364 C7.07430061,8.54126801 7.36426878,8.71077624 7.5347935,8.98424731 L9.55980195,12.2018001 L15.5290147,5.32670623 C15.7270262,5.07569854 16.0302209,4.93404067 16.3466891,4.95062607 Z"
        fill="#FFFFFF"
      />
    </g>
  </svg>
);