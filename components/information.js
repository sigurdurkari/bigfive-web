import React from 'react'

export default ({ start }) => (
  <div>
    <p className='question'>
      Ég um mig
    </p>

    <div className='imgContainer notOnMobile'>
      <img style={{width:'100%'}} src='http://i65.tinypic.com/j8z3wi.gif' />
      <p style={{fontSize:'12', textAlign:'center'}}>Dæmi um niðurstöður að prófi loknu</p>
    </div>

    <p>
      Tilgangur rannsóknarinnar er að kanna persónuleikaþáttaeinkenni á Íslandi. Rannsóknin er framkvæmd af Franz Jónasi Arnari Arnarsyni, B.Sc. nema í sálfræði undir handleiðslu Sævars Más Gústavssonar, sálfræðings og er hluti af lokaverkefni við Háskólann í Reykjavík.
    </p>
    <p>
      Þátttaka í rannsókninni felur í sér að svara persónuleikaprófi sem ber nafnið M5-50 og byggir á fimm þátta líkaninu um persónuleika. Prófið samanstendur af 56 spurningum og fullyrðingum og ætti að taka um það bil 10 til 15 mínútur að svara. Rannsóknarinnar vegna er mikilvægt að þú gefir áreiðanleg svör og svarir öllum spurningum eins heiðarlega og unnt er. Ekki verður hægt að rekja svör til þátttakenda.
    </p>
    <p>
      Eftir að hafa svarað öllum spurningunum gefst þér kostur á að sjá niðurstöður persónuleikaprófsins sem og útskýringu á niðurstöðum þess. Rannsakendur telja að þátttaka í rannsókninni feli ekki í för með sér neina áhættu og geta þátttakendur hætt við prófið hvenær sem er  án nokkurra afleiðinga eða útskýringa.
    </p>
    <p>
      Persónuleikaprófið samanstendur af fullyrðingum sem lýsa hegðun  og viðhorfum. Notaðu svarmöguleikana til að gefa til kynna hversu vel hvert atriði á við um þig. Reyndu að svara eins heiðarlega og þú getur og reyndu að miða svörin við það hvernig þú ert almennt núna, en ekki eins og þú myndir vilja vera í framtíðinni.
    </p>
    <p>
      Með því að taka prófið staðfestir þú að þú hafir lesið leiðbeiningarnar og að ópersónugreinanleg svör þín megi nota í rannsóknarskyni. Þess ber að geta að prófið er með öllu nafnlaust og ekki er unnt að rekja einstök svör til þátttakenda. Niðurstöður þessarar rannsóknar verða notaðir í BSc verkefni Franz Jónasar við Háskólann í Reykjavík. 
    </p>
    <p>
      Ef einhverjar spurningar vakna við þátttöku í rannsókninni er hægt að hafa samband við Franz Jónas með tölvupósti: franz15@ru.is
    </p>
    <p>
      Með fyrirfram þökk,<br/>
      Franz Jónas Arnar Arnarson
    </p>
    
    <span>
      <p style={{marginTop: '50px'}}>
        <button className='navButton' onClick={start}>
          <i className='material-icons' style={{ fontSize: '40px' }}>navigate_next</i>
        </button>
      </p>
    </span>
    <style>
    {`
      .imgContainer {
        float: right;
        clear: both;
        width: 25%;
        max-width: 350px;
        padding: 20px;
        margin-left: 30px;
        margin-bottom: 30px;
        margin-right: 30px;
        margin-top: 10px;
        border: 1px solid #828282;
      }
      @media screen and (max-width: 435px) {
        .notOnMobile {
            display: none !important;
        }
      }
    `}
    </style>
  </div>
)