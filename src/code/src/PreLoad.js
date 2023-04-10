
import { useEffect, useState } from "react";



export default function PreLoad() {
  const [words, setWords] = useState('');
  const data = '本次体验所需镜像较大,函数计算需要进行冷启动，请耐心等待2-5分钟'.split('')
  let index = 0;
  let typeWords = ''
  function writing(index) {
    if (index < data.length) {
      typeWords += data[index]
      setWords(typeWords)
      setTimeout(writing.bind(this), 300, ++index)
    }
  }
  useEffect(() => {
    writing(index);
  }, []);
  return (
    <div className="loading">

      <img src="https://img.alicdn.com/imgextra/i4/O1CN018H1Ebb1MWTxEtS0tT_!!6000000001442-2-tps-1920-1080.png" style={{ width: 1200, margin: '95px auto', display: 'block' }} />
      <div id="tips">
        {words}
      </div>
    </div>
  );
}


