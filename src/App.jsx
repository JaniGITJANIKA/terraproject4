import { useEffect, useState } from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'

function ClockComponent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
}, []);

const seconds = time.getSeconds();
const minutes = time.getMinutes();
const hours = time.getHours() % 12;

const secondDeg = seconds * 6;
const minuteDeg = minutes * 6 + seconds * 0.1;
const hourDeg = hours * 30 + minutes * 0.5;
return (
  <div>
  <div className='analogclock'>
      <div className='h1'></div>
        <div className='h2'></div>
        <div className='h3'></div>
        <div className='h4'></div>
        <div className='h5'></div>
        <div className='h6'></div>
        <div className='h7'></div>
        <div className='h8'></div>
        <div className='h9'></div>
        <div className='h10'></div>
        <div className='h11'></div>
        <div className='h12'></div>
    <div className='our' style={{transform: `rotate(${hourDeg}deg)` }}></div>
    <div className='minute' style={{transform: `rotate(${minuteDeg}deg)`}}></div>
    <div className='second' style={{transform: `rotate(${secondDeg}deg)`}}></div>
    <div className='a'></div>
  </div>
  <br />
  <br />
  <br />
  <div className='digitalclock'>
    <p className='year'>{time.getFullYear()}</p>
    <p className='month'>{time.getMonth() + 1}</p>
    <p className='date'>{time.getDate()}</p>
    <p className='hour'>{time.getHours()}</p>
    <p className='minute'>{time.getMinutes()}</p>
    <p className='second'>{time.getSeconds()}</p>
  </div>
  <p className='digitalclocktext'><span>Years</span><span>Months</span><span>Days</span><span>Hours</span><span>Minutes</span><span>Seconds</span></p>
  </div>
);

}


function Nav() {
  return (
    <div className='nav'>
      <li><Link className='li' to='/'>Kezdőlap</Link></li>
      <li><Link className='li' to='/effekt1'>Első effekt</Link></li>
      <li><Link className='li' to='/effekt2'>Második effekt</Link></li>
      <li><Link className='li' to='/effekt3'>Harmadik effekt</Link></li>
      <li><Link className='li' to='/effekt4'>Negyedik effekt</Link></li>
      <li><Link className='li' to='/effekt5'>Ötödik effekt</Link></li>
    </div>
  );
}
function Main() {
  return (
    <div>
  <div className='main'>
    <h2>Üdvözölek</h2>
    <p>Ez most arról szól hogy egy kicsit könnyedebbre vettem a programozást és látványos effekteket készítek hogy gyakoroljam hogy ne csak működjön hanem szép is legyen és ki élhesem a kreativitásomat.</p>
    <p>Köszönöm szépen a figyelmet meg hogy elolvasta és megnézte a weboldalamat.</p>
  </div>    
  <div className='stickbox'>
    <div className='lines'>
      <div className='sticks'>
        <div className='stick1'></div>
        <div className='stick2'></div>
      </div>
      <div className='buttons'>
        <div>
          <button></button>
        <button></button>
        </div>
        <div>
          <button></button>
        <button></button>
      </div>
       
      </div>
      </div><br />
      <div className='lines'>
      <div className='speakers'>
        <table>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div className='screens'>
        <p>Köszönöm szépen<br/>a figyelmet!</p>
      </div>
      </div>
    </div>
    </div>
  );
}

function Effekt1() {
  return (
    <div>
      <h2>Ez itt egy ilyen egeres effekt ahova az ember rá húzza az egerét ott fog világítani a kocka.</h2>
      <div className='effekter'>
        <table className='effekt1'>
          <tr>
            <td>⚡</td>
            <td>💻</td>
            <td>⚙️</td>
            <td>🚀</td>
            <td>🔥</td>
            <td>🌌</td>
            <td>🔮</td>
            <td>🧬</td>
            <td>🕹️</td>
            <td>🔋</td>
          </tr>
          <tr>
            <td>🛰️</td>
            <td>🧪</td>
            <td>🛡️</td>
            <td>🧭</td>
            <td>📡</td>
            <td>⚠️</td>
            <td>🦾</td>
            <td>⚛️</td>
            <td>👁️‍🗨️</td>
            <td>🌐</td>
          </tr>
          <tr>
            <td>🛠️</td>
            <td>⌨️</td>
            <td>🖥️</td>
            <td>💽</td>
            <td>🗃️</td>
            <td>🗄️</td>
            <td>🧮</td>
            <td>📽️</td>
            <td>🎞️</td>
            <td>🔋</td>
          </tr>
          <tr>
            <td>🛜</td>
            <td>🔤</td>
            <td>🔣</td>
            <td>🔤</td>
            <td>🎚️</td>
            <td>🎛️</td>
            <td>🔍</td>
            <td>🔎</td>
            <td>🛞</td>
            <td>📌</td>
          </tr>
          <tr>
            <td>📌</td>
            <td>📎</td>
            <td>📡</td>
            <td>🧭</td>
            <td>🔬</td>
            <td>🔌</td>
            <td>💾</td>
            <td>📹</td>
            <td>🎙️</td>
            <td>🗂️</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
function Effekt2() {
  return (
    <div>
      <h2>Ez egy ilyen töltő képernyő effekt saját módra.</h2>
      <div className='effekt2'>
        <div className='h1'></div>
        <div className='h2'></div>
        <div className='h3'></div>
        <div className='h4'></div>
        <div className='h5'></div>
        <div className='h6'></div>
        <div className='h7'></div>
        <div className='h8'></div>
        <div className='a9'></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
function Effekt3() {
  return (
    <div>
      <h2>Óra effekt</h2>
      <div className='effekt3'>
          <ClockComponent />
      </div>
    </div>
  );
}
function Effekt4() {
  return (
    <div>
      <h2>Lufik</h2>
      <div className='effekt4'>
        <div className='balli'>
        <div className='ballon'><div className='ball'></div><div className='on'></div></div>
        <div className='ballon'><div className='ball'></div><div className='on'></div></div>
        <div className='ballon'><div className='ball'></div><div className='on'></div></div>
        <div className='ballon'><div className='ball'></div><div className='on'></div></div>
        <div className='ballon'><div className='ball'></div><div className='on'></div></div>
        <div className='ballon'><div className='ball'></div><div className='on'></div></div>
        <div className='ballon'><div className='ball'></div><div className='on'></div></div>
        <div className='ballon'><div className='ball'></div><div className='on'></div></div>
        <div className='ballon'><div className='ball'></div><div className='on'></div></div>
        <div className='ballon'><div className='ball'></div><div className='on'></div></div>
        </div>
      </div>
    </div>
  );
}
function Effekt5() {
  return (
  <div>
    <h2>Emoji</h2>
    <div className='emoji'>
      <div className='eyes1'></div>
      <div className='eyes2'></div>
      <div className='mouth'></div>

    </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
        <div className='like'>👍️</div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    <br />
  </div>
  );
}


export default function Weboldal() {
  return (
    <HashRouter>
    <div className='background'>
    <div className='contener'>
    <h1>Effektek és látvány weboldala</h1>
    <br />
    <Nav/>
    <br />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/effekt1' element={<Effekt1 />} />
      <Route path='/effekt2' element={<Effekt2 />} />
      <Route path='/effekt3' element={<Effekt3 />} />
      <Route path='/effekt4' element={<Effekt4 />}/>
      <Route path='/effekt5' element={<Effekt5 />}/>
    </Routes>
    </div>
    </div>
    </HashRouter>
    
  )
}

