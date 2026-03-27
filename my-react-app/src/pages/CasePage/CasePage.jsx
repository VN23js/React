import Caseitem from './components/CaseItem';
import { useEffect, useState } from 'react';
import RoletsItems from './components/Rulette';
import './case.css';
import { useSelector } from 'react-redux';

export default function Case() {
  return (
    <div className='container overflow-hidden'>
      <div className=' flex justify-center flex-col items-center'>
        <div className='max-w-[1086px] justify-center w-full flex-col mx-auto flex '>
          <RoletsItems></RoletsItems>
          <Caseitem></Caseitem>
        </div>
      </div>
    </div>
  );
}
