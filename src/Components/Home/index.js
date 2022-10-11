import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GlobalLayout } from '../../GlobalLayout/layout'
import './index.css'

const HomeBody = () => {

  const [ifChecked, setIfChecked] = useState(false);
  const [doneChecked, setDoneChecked] = useState('')


  const SelectPage = () =>{
    const[checked, setChecked] = useState('');

    function next(){
      if (checked!==''){
      setIfChecked(true)
      setDoneChecked(checked)
      } else {alert('select an option')}
    }
    

   return ( 
   <Grid>
    < Checkbox >
    <input className='check' type='radio' name='pages' onChange={e=>setChecked(e.target.value)} value='TimeFor'/>
      Estimate time for battery charge and discharge
    </Checkbox>
    <Checkbox>
    <input className='check' type='radio' name='pages' onChange={e=>setChecked(e.target.value)} value='Numbers' />
      Estimate the number of panels and batteries needed
    </Checkbox>
    <div style={{display:'flex', justifyContent:'center', }}>
       <Button onClick={next}>Next</Button>   
    </div>

    </Grid>
   )
  }


  const TimeFor = () => {


    const [chargeTime, setChargeTime] = useState();
  
    const [dischargeTime, setDischargeTime] = useState();
    
    const [solarVoltage, setSolarVoltage] = useState();
    const [solarWattage, setSolarWattage] = useState();
    
    const [batteryVoltage, setBatteryVoltage] = useState();
    const [batteryAmp_hour, setBatteryAmp_hour] = useState();
  
    const [loadRating, setLoadRating] = useState();
  
    const [numberOfPanels, setNumberOfPanels] = useState();
  
    const [numberOfBatteries, setNumberOfBatteries] =useState();

    const [comment, setComment] = useState();

   const refresh =()=>{
      setChargeTime('')
      setDischargeTime('')
      setSolarVoltage('')
      setSolarWattage('')
      setBatteryVoltage('')
      setBatteryAmp_hour('')
      setNumberOfBatteries('')
      setNumberOfPanels('')
      setLoadRating('')
      setComment('')
    }
    useEffect(refresh,[])

    const calculate = () => {
      if (numberOfBatteries===undefined||numberOfBatteries===''){
        setComment('input your available number of battery(s)');
      }
      if (numberOfPanels===undefined||numberOfPanels===''){
        setComment('input your available number of solar panel(s)');
      }
      if (batteryAmp_hour===undefined||batteryAmp_hour===''){
        setComment('input the battery\'s AH');
      }     
      if (batteryVoltage===undefined||batteryVoltage===''){
        setComment('input the battey\'s voltage');
      }      
      if (solarWattage===undefined||solarWattage===''){
        setComment('input the solar panel watt rating');
      }
      if (solarVoltage===undefined||solarVoltage===''){
        setComment('input the solar panel voltage rating'); //not used in any line to calculate TImeFor function component
      }


      let batteryWattHour = batteryAmp_hour*batteryVoltage;
      let totalSolarCapacity = solarWattage*numberOfPanels;
      let totalBatteryCapacity = batteryWattHour*numberOfBatteries;

      setDischargeTime(Math.floor(totalBatteryCapacity/loadRating));
      setChargeTime(Math.ceil(totalBatteryCapacity/totalSolarCapacity));
      
    }

   return (    
   <Grid data-aos='fade-in'>
    <Solar>
    <Text1>Number of solar panels :</Text1>
      <Input> <Space type='number' onChange={e=>setNumberOfPanels(e.target.value)} value={numberOfPanels}></Space><Unit> Unit </Unit> </Input>
      <Indicator><span style={{color:'red'}}>*</span> number of panels needed</Indicator>
    </Solar>
    <Solar>
    <Text1>Number of batteries :</Text1>
      <Input> <Space type='number' onChange={e=>setNumberOfBatteries(e.target.value)} value={numberOfBatteries}></Space><Unit> Unit </Unit> </Input>
      <Indicator><span style={{color:'red'}}>*</span> number of panels needed</Indicator>
    </Solar> 
    <Solar>
    <Text1>Solar Panel(s) Capacity :</Text1>
      <Input> <Space type='number' onChange={e=>setSolarVoltage(e.target.value)} value={solarVoltage}></Space><Unit> V </Unit> </Input>
      <Input> <Space type='number' onChange={e=>setSolarWattage(e.target.value)} value={solarWattage}></Space><Unit> W </Unit> </Input>
      <Indicator><span style={{color:'red'}}>*</span> recommended you use the same solar panel rating</Indicator>
    </Solar>
    <Solar>
    <Text1>Battery(s) Capacity :</Text1>
      <Input> <Space type='number' onChange={e=>setBatteryVoltage(e.target.value)} value={batteryVoltage}></Space><Unit> V </Unit> </Input>
      <Input> <Space type='number' onChange={e=>setBatteryAmp_hour(e.target.value)} value={batteryAmp_hour}></Space><Unit> AH </Unit> </Input>
      <Indicator><span style={{color:'red'}}>*</span> recommended you use the same battery capacity, from the same supplier</Indicator>
    </Solar>
    <Solar>
    <Text1>Load :</Text1>
      <Input> <Space type='number' onChange={e=>setLoadRating(e.target.value)} value={loadRating} ></Space><Unit> W </Unit> </Input>
      <Indicator><span style={{color:'red'}}>*</span> total load to be powered</Indicator>
    </Solar>
    <Time>
      <Text1>Time for Charge :</Text1>
      <Input> <Spacee>{chargeTime}</Spacee><Unit> Hrs </Unit> </Input>
      <Indicator><span style={{color:'red'}}>*</span> time to charge the battery(s) to 100%</Indicator>
    </Time>
    <Time>
    <Text1>Time for discharge :</Text1>
      <Input> <Spacee>{dischargeTime}</Spacee><Unit> Hrs </Unit> </Input>
      <Indicator><span style={{color:'red'}}>*</span> time to discharge the battery(s) to 0%</Indicator>
    </Time>
    <div style={{display:'flex',alignItems:'center', justifyContent:'center', fontSize:'20px', color:'red'}}>
      {comment}
    </div>
    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
      <Button onClick={()=>{setIfChecked(false)}}>Back</Button>
      <Button onClick={calculate} > Calculate </Button>
      <Button onClick={refresh}>refresh</Button>
    </div>
  </Grid>
  )
  }

  const Numbers = () =>{
    const [chargeTime, setChargeTime] = useState();
  
    const [dischargeTime, setDischargeTime] = useState();
    
    const [solarVoltage, setSolarVoltage] = useState();
    const [solarWattage, setSolarWattage] = useState();
    
    const [batteryVoltage, setBatteryVoltage] = useState();
    const [batteryAmp_hour, setBatteryAmp_hour] = useState();
  
    const [loadRating, setLoadRating] = useState();
  
    const [numberOfPanels, setNumberOfPanels] = useState();
  
    const [numberOfBatteries, setNumberOfBatteries] =useState();

    const [comment, setComment] = useState();

    const refresh =()=>{
      setChargeTime('')
      setDischargeTime('')
      setSolarVoltage('')
      setSolarWattage('')
      setBatteryVoltage('')
      setBatteryAmp_hour('')
      setNumberOfBatteries('')
      setNumberOfPanels('')
      setLoadRating('')
      setComment('')
    }
    useEffect(refresh,[])

    const calculate = () => {
      if (chargeTime===undefined||chargeTime===''){
        setComment('input your desired time to charge battery(s) to 100%');
      }
      if (dischargeTime===undefined||dischargeTime===''){
        setComment('input your desired time for battery(s) to discharge to 0%');
      }
      if (batteryAmp_hour===undefined||batteryAmp_hour===''){
        setComment('input the battery\'s AH');
      }     
      if (batteryVoltage===undefined||batteryVoltage===''){
        setComment('input the battey\'s voltage');
      }      
      if (solarWattage===undefined||solarWattage===''){
        setComment('input the solar panel watt rating');
      }
      if (solarVoltage===undefined||solarVoltage===''){
        setComment('input the solar panel voltage rating'); //not used in any line to calculate TImeFor function component
      }
      if (loadRating===undefined||loadRating===''){
        setComment('input the total load to be powered');
      }

      let batteryWattHour = batteryAmp_hour*batteryVoltage;
      let numberOfBatteries = (loadRating*dischargeTime)/batteryWattHour;

      let panelCurrent = solarWattage/solarVoltage;
      let perPanelChargeTime = batteryAmp_hour/panelCurrent;
      let numberOfPanels = (perPanelChargeTime/chargeTime)*numberOfBatteries

      setNumberOfBatteries(Math.round(numberOfBatteries));
      setNumberOfPanels(Math.ceil(numberOfPanels));
      
    }



    return (
      <Grid>
      <Time>
        <Text1>Time for Charge :</Text1>
        <Input> <Space type='number' id='charg' onChange={e=>setChargeTime(e.target.value)} value={chargeTime}></Space><Unit> Hrs </Unit> </Input>
        <Indicator><span style={{color:'red'}}>*</span> time to charge the battery(s) to 100%</Indicator>
      </Time>
      <Time>
      <Text1>Time for discharge :</Text1>
        <Input> <Space type='number' id='dischargeTime' onChange={e=>setDischargeTime(e.target.value)} value={dischargeTime}></Space><Unit> Hrs </Unit> </Input>
        <Indicator><span style={{color:'red'}}>*</span> time to discharge the battery(s) to 0%</Indicator>
      </Time>
      <Solar>
      <Text1>Solar Panel(s) Capacity :</Text1>
        <Input> <Space type='number' onChange={e=>setSolarVoltage(e.target.value)} value={solarVoltage}></Space><Unit> V </Unit> </Input>
        <Input> <Space type='number' onChange={e=>setSolarWattage(e.target.value)} value={solarWattage}></Space><Unit> W </Unit> </Input>
        <Indicator><span style={{color:'red'}}>*</span> recommended you use the same solar panel rating</Indicator>
      </Solar>
      <Solar>
      <Text1>Battery(s) Capacity :</Text1>
        <Input> <Space type='number' onChange={e=>setBatteryVoltage(e.target.value)} value={batteryVoltage}></Space><Unit> V </Unit> </Input>
        <Input> <Space type='number' onChange={e=>setBatteryAmp_hour(e.target.value)} value={batteryAmp_hour}></Space><Unit> AH </Unit> </Input>
        <Indicator><span style={{color:'red'}}>*</span> recommended you use the same battery capacity, from the same supplier</Indicator>
      </Solar>
      <Solar>
      <Text1>Load :</Text1>
        <Input> <Space type='number' onChange={e=>setLoadRating(e.target.value)} value={loadRating}></Space><Unit> W </Unit> </Input>
        <Indicator><span style={{color:'red'}}>*</span> total load to be powered</Indicator>
      </Solar>
      <Solar>
      <Text1>Number of solar panels :</Text1>
        <Input> <Spacee>{numberOfPanels}</Spacee><Unit> Unit </Unit> </Input>
        <Indicator><span style={{color:'red'}}>*</span> number of panels needed</Indicator>
      </Solar>
      <Solar>
      <Text1>Number of batteries :</Text1>
        <Input> <Spacee>{numberOfBatteries}</Spacee><Unit> Unit </Unit> </Input>
        <Indicator><span style={{color:'red'}}>*</span> number of panels needed</Indicator>
      </Solar>
      <div style={{display:'flex',alignItems:'center', justifyContent:'center', fontSize:'20px', color:'red'}}>
        {comment}
      </div>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
      <Button onClick={()=>{setIfChecked(false)}}>Back</Button>
      <Button onClick={calculate} > Calculate </Button>
      <Button onClick={refresh}>refresh</Button>
    </div>
    </Grid>
    )
  }

  const SelectedPage= () => {

    if(doneChecked==='TimeFor'){
      return <TimeFor/>;
    }
    else {
      return <Numbers/>;
    }
  }

  return (
    <HomeBodyCon>
      <GlobalLayout>
        <Box>
          {ifChecked?<SelectedPage/>:<SelectPage/>}
        </Box>     
        <div style={{display:'flex',justifyContent:'center', color:'white', }}>
          <Boxx>
            <div><span style={{color:'orange'}}>fun fact</span>:&nbsp;</div>
            <div> The solar panel seen in the background picture is a polycrystalline solar panel. </div>
          </Boxx>
        </div>
      </GlobalLayout>
    </HomeBodyCon>
  )
}

export default HomeBody

const HomeBodyCon = styled.div`
  display:flex ;
  margin:20px ;

  @media screen and (max-width: 600px){
    margin: 5px;
  }
  
`
const Box = styled.div`
  display: flex ;
  flex-direction:column ;
  height: auto ;
  background-color: rgba(200,250,250, 0.7) ;
  border: 1px solid black;
  border-radius: 10px ;
`
const Boxx = styled.div`
  display: grid ;
  grid-template-columns: auto repeat(1, 1fr) ;
  position: fixed;
  bottom: 30px ;
  height: auto ;
  justify-content:center ;
  background-color: transparent;
  @media screen and (max-width:720px){
    font-size: 14px ; 
  }

  @media screen and (max-width:600px){
    font-size: 10px ;
  }

`

const Grid = styled.div`
  display: grid ;
  width:100% ;
  grid-template-rows: repeat(auto, 60px) ;
  row-gap: 20px ;
  padding: 20px 40px 20px 40px ;

  @media screen and (max-width: 900px){
    padding: 15px 20px 15px 20px;
    row-gap: 16px ;
  }
  @media screen and (max-width:600px){
    padding: 10px 8px 10px 8px;
    row-gap: 14px ;
  }
`

const Time = styled.div`
  display: flex;
  flex-direction: row ;
  align-items:center ;
  gap:10px;
  @media screen and (max-width:600px){
    gap:5px;
  }
`
const Text1 = styled.div`
  font-size: 24px ;
  @media screen and (max-width:600px){
    font-size:10px ;
  }
`
const Input = styled.div`
  display: flex;
  flex-direction: row ;
`
const Space = styled.input`
  height: 40px ;
  width: 70px ;
  font-size:24px ;
  border: none ;
  padding: 0px 5px ;
  @media screen and (max-width:600px){
    height: calc(40px*0.5) ;
    width : calc(70px*0.5);
    font-size:10px ;
  }
`
const Spacee = styled.div`
  height: 40px ;
  width: auto ;
  font-size:24px ;
  border: none ;
  padding: 0px 5px ;
  background-color: skyblue ;
  @media screen and (max-width:600px){
    height: calc(40px*0.5) ;
    width : calc(70px*0.5);
    font-size:10px ;
  }
`
const Unit = styled.div`
  height: 40px ;
  width: 50px ;
  background-color: rgb(180,180,180) ;
  font-size: 24px ;
  justify-content:center ;
  align-items:center ;
  display:flex ;

  @media screen and (max-width:600px){
    height: calc(40px*0.5) ;
    width : calc(50px*0.5);
    font-size:10px ;
  }
`
const Indicator = styled.div`
  font-size: 16px ;
  font-style: italic ;
  margin-left: 20px ;
  color: rgb(80,80,80) ;

  @media screen and (max-width:600px){
    font-size: 7px ;
    margin-left:2px ;
`

const Solar = styled.div`
  display: flex;
  flex-direction: row ;
  align-items:center ;
  gap:10px;
  @media screen and (max-width:600px){
    gap: 5px ;
  }
`
const Button = styled.div`
  display:flex ;
  align-items:center ;
  justify-content:center ;
  height:40px ;
  width: 120px ;
  background-color: green ;
  font-size: 24px ;
  cursor: pointer;
  color:white;

  @media screen and (max-width:600px){
    height: calc(40px*0.75);
    width: calc(120px*0.55);
    font-size: 14px ;
  }
`
const Checkbox= styled.div`
  display:flex;
  flex-direction: row ;
  gap: 15px;
  font-size: 24px ;
  align-items:center ;

  @media screen and (max-width:720px){
    font-size: 18px ;
    gap: 12px ;
  }

  @media screen and (max-width:600px){
    font-size: 14px ;
    gap: 8px ;
  }
`

const Checkboxx= styled.div`
  display:flex;
  flex-direction: row ;  gap: 15px;
  font-size: 20px ;
  align-items:center ;
  justify-content:center ;
`
