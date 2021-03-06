import React from 'react';
import Svg, {Path, G, Circle} from 'react-native-svg';

function SvgMap(props) {
  const {left, top, zoom, resolution, width, height, ribList} = props;
  // console.log(ribList);
  console.log('ribList:', ribList);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 429 443"
      fill="none"
      preserveAspectRatio="xMinYMin meet">
      <G
        transform={{
          translateX: left * resolution,
          translateY: top * resolution,
          scale: zoom,
        }}>
        { ribList.includes(0) && <Path d="M306 225L296 229" id="0" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(1) && <Path d="M296 219V229" id="1" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(2) && <Path d="M296 209V219" id="2" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(3) && <Path d="M296 199V209" id="3" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(4) && <Path d="M296 189V199" id="4" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(5) && <Path d="M296 189L286 186" id="5" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(6) && <Path d="M296 189L305 184" id="6" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(7) && <Path d="M305 184L314 179" id="7" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(8) && <Path d="M314 179L322 173" id="8" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(9) && <Path d="M286 186L279 186" id="9" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(10) && <Path d="M294 179L296 189" id="10" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(11) && <Path d="M306 225L316 225" id="11" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(12) && <Path d="M316 225L326 225" id="12" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(13) && <Path d="M326 225L331 234" id="13" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(14) && <Path d="M331 234L335 244" id="14" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(15) && <Path d="M335 244L338 254" id="15" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(16) && <Path d="M338 254L338 264" id="16" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(17) && <Path d="M338 264L338 274" id="17" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(18) && <Path d="M338 274L338 284" id="18" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(19) && <Path d="M338 284L338 294" id="19" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(20) && <Path d="M338 304V294" id="20" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(21) && <Path d="M338 314V304" id="21" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(22) && <Path d="M338 324V314" id="22" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(23) && <Path d="M338 334V324" id="23" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(24) && <Path d="M338 344V334" id="24" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(25) && <Path d="M338 354V344" id="25" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(26) && <Path d="M338 354L346 361" id="26" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(27) && <Path d="M346 361L354 368" id="27" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(28) && <Path d="M354 368L362 375" id="28" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(29) && <Path d="M362 375L370 382" id="29" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(30) && <Path d="M338 364V354" id="30" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(31) && <Path d="M338 374V364" id="31" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(32) && <Path d="M338 384V374" id="32" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(33) && <Path d="M336 388L338 384" id="33" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(34) && <Path d="M328 358L338 354" id="34" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(35) && <Path d="M318 362L328 358" id="35" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(36) && <Path d="M338 294H348" id="36" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(37) && <Path d="M348 294H358" id="37" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(38) && <Path d="M358 294H364" id="38" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(39) && <Path d="M294 179L290 170" id="39" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(40) && <Path d="M290 170L283 163" id="40" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(41) && <Path d="M283 163L274 158" id="41" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(42) && <Path d="M274 158L264 154" id="42" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(43) && <Path d="M264 154L254 150" id="43" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(44) && <Path d="M254 150L243 147" id="44" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(45) && <Path d="M243 147L233 147" id="45" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(46) && <Path d="M233 147L223 147" id="46" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(47) && <Path d="M223 147L213 147" id="47" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(48) && <Path d="M213 147L203 147" id="48" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(49) && <Path d="M203 147L193 147" id="49" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(50) && <Path d="M193 147L183 147" id="50" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(51) && <Path d="M183 147L173 147" id="51" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(52) && <Path d="M173 147L163 147" id="52" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(53) && <Path d="M163 147L153 147" id="53" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(54) && <Path d="M153 147L143 147" id="54" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(55) && <Path d="M143 147L133 147" id="55" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(56) && <Path d="M124 157L133 147" id="56" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(57) && <Path d="M115 167L124 157" id="57" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(58) && <Path d="M106 177L115 167" id="58" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(59) && <Path d="M106 187V177" id="59" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(60) && <Path d="M109 190L106 187" id="60" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(61) && <Path d="M133 147L123 147" id="61" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(62) && <Path d="M123 147L113 147" id="62" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(63) && <Path d="M113 147L103 147" id="63" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(64) && <Path d="M103 147L93 147" id="64" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(65) && <Path d="M93 147V137" id="65" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(66) && <Path d="M83 137H93" id="66" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(67) && <Path d="M73 137H83" id="67" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(68) && <Path d="M63 137H73" id="68" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(69) && <Path d="M53 137H63" id="69" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(70) && <Path d="M53 137V147" id="70" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(71) && <Path d="M53 147V157" id="71" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(72) && <Path d="M53 157V167" id="72" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(73) && <Path d="M53 167V177" id="73" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(74) && <Path d="M53 177V187" id="74" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(75) && <Path d="M53 187L60 195" id="75" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(76) && <Path d="M60 195L67 203" id="76" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(77) && <Path d="M67 203L77 203" id="77" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(78) && <Path d="M77 203L87 203" id="78" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(79) && <Path d="M87 203L90 213" id="79" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(80) && <Path d="M90 213L91 223" id="80" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(81) && <Path d="M91 223L89 233" id="81" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(82) && <Path d="M89 233L89 243" id="82" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(83) && <Path d="M89 243L89 253" id="83" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(84) && <Path d="M89 253L89 263" id="84" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(85) && <Path d="M89 263L89 266" id="85" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(86) && <Path d="M89 253H79" id="86" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(87) && <Path d="M99 253H89" id="87" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(88) && <Path d="M109 253H99" id="88" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(89) && <Path d="M119 253H109" id="89" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(90) && <Path d="M129 253H119" id="90" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(91) && <Path d="M139 253H129" id="91" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(92) && <Path d="M149 253H139" id="92" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(93) && <Path d="M159 253H149" id="93" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(94) && <Path d="M169 253H159" id="94" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(95) && <Path d="M179 253H169" id="95" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(96) && <Path d="M189 253H179" id="96" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(97) && <Path d="M199 253H189" id="97" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(98) && <Path d="M209 253H199" id="98" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(99) && <Path d="M219 253H209" id="99" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(100) && <Path d="M229 253H219" id="100" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(101) && <Path d="M239 253H229" id="101" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(102) && <Path d="M249 253H239" id="102" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(103) && <Path d="M259 253H249" id="103" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(104) && <Path d="M269 253H259" id="104" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(105) && <Path d="M269 253V263" id="105" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(106) && <Path d="M269 263V273" id="106" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(107) && <Path d="M269 273V283" id="107" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(108) && <Path d="M269 283V293" id="108" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(109) && <Path d="M269 293V303" id="109" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(110) && <Path d="M269 303V313" id="110" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(111) && <Path d="M269 313V323" id="111" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(112) && <Path d="M269 323L262 330" id="112" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(113) && <Path d="M262 330L262 341" id="113" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(114) && <Path d="M262 341H272" id="114" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(115) && <Path d="M272 341H282" id="115" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(116) && <Path d="M282 341L291 346" id="116" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(117) && <Path d="M291 346L301 346" id="117" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(118) && <Path d="M301 346L311 346" id="118" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(119) && <Path d="M311 346L320 346" id="119" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(120) && <Path d="M320 346L329 346" id="120" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(121) && <Path d="M329 346L338 344" id="121" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(122) && <Path d="M278 245L269 253" id="122" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(123) && <Path d="M287 237L278 245" id="123" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(124) && <Path d="M296 229L287 237" id="124" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(125) && <Path d="M79 253H69" id="125" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(126) && <Path d="M69 253H59" id="126" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(127) && <Path d="M59 253H54" id="127" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(128) && <Path d="M43 137H53" id="128" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(129) && <Path d="M93 137L88 128" id="129" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(130) && <Path d="M88 128L81 120" id="130" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(131) && <Path d="M81 120L74 112" id="131" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(132) && <Path d="M74 112L73 102" id="132" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
{ ribList.includes(133) && <Path d="M73 102L73 95" id="133" stroke="#D00000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /> }
        <Path
          d="M216 5.5L1 0v102.5l42 1.235 16.5.486 9 .279c0-3 2-5 4.5-5s4.5 2 4.5 5l8 .088 15 .164 15.5.17 28.5.312 14.5.158 15 .165 40.5.443V89h8V74H216V5.5z"
          fill="#E9B843"
          stroke="#fff"
        />
        <Path
          d="M75.16 57.019c-.096.827-.403 1.466-.918 1.917-.512.448-1.195.671-2.047.671-.923 0-1.665-.33-2.223-.993-.555-.663-.833-1.549-.833-2.659v-.752c0-.727.13-1.366.387-1.917.261-.552.63-.974 1.106-1.268.477-.297 1.028-.446 1.655-.446.83 0 1.496.233 1.998.698.501.462.793 1.103.875 1.923h-1.036c-.09-.623-.285-1.074-.586-1.353-.297-.28-.714-.42-1.251-.42-.66 0-1.177.244-1.553.731-.372.487-.558 1.18-.558 2.079v.757c0 .849.177 1.524.531 2.025.355.502.85.752 1.488.752.573 0 1.012-.129 1.316-.387.308-.261.512-.714.613-1.358h1.036zm6.343-5.34h1.032V59.5h-1.032v-6.026l-3.85 6.026h-1.037v-7.82h1.036v6.026l3.851-6.026zm8.922 7.821h-1.037v-3.615h-3.942V59.5h-1.031v-7.82h1.03v3.362h3.943V51.68h1.037v7.82zm6.252-3.615h-3.39v2.772h3.938v.843h-4.969v-7.82h4.915v.848h-3.883v2.514h3.389v.843zm3.163-4.205l2.557 6.38 2.557-6.38h1.337v7.82h-1.031v-3.045l.096-3.288-2.567 6.333H102l-2.563-6.316.103 3.27V59.5h-1.032v-7.82h1.332zm12.687 5.779h-3.277l-.735 2.041h-1.064l2.987-7.82h.902l2.992 7.82h-1.059l-.746-2.041zm-2.965-.849h2.659l-1.332-3.657-1.327 3.657zm14.523 2.89h-1.036v-6.972h-3.857V59.5h-1.031v-7.82h5.924v7.82zm6.199-2.041h-3.277l-.736 2.041h-1.063l2.986-7.82h.903l2.991 7.82h-1.058l-.746-2.041zm-2.965-.849h2.659l-1.332-3.657-1.327 3.657zm6.853-.172V59.5h-1.031v-7.82h2.884c.856 0 1.526.218 2.009.655.487.437.731 1.015.731 1.735 0 .759-.238 1.344-.715 1.756-.472.408-1.151.612-2.035.612h-1.843zm0-.843h1.853c.552 0 .974-.129 1.268-.386.294-.262.44-.638.44-1.128 0-.466-.146-.838-.44-1.118-.294-.279-.696-.424-1.209-.435h-1.912v3.067zm7.939.392h-.951V59.5h-1.031v-7.82h1.031v3.448h.806l2.734-3.448h1.283l-2.986 3.792 3.207 4.028h-1.263l-2.83-3.513z"
          fill="#fff"
        />
        <Path
          d="M44 104l-43-1.5L.5 153h44l-.5-49z"
          fill="#8F9591"
          stroke="#fff"
        />
        <Path
          d="M10.701 127.431l1.193-1.908h.772l-1.572 2.468 1.61 2.509h-.78l-1.223-1.941-1.23 1.941h-.776l1.613-2.509-1.576-2.468h.77l1.2 1.908zm5.059-.629h.632v3.698h-.632v-2.697l-1.706 2.697h-.632v-3.698h.632v2.7l1.706-2.7zm4.395.512h-1.24v3.186h-.633v-3.186h-1.217v-.512h3.09v.512zm1.207 2.649h2.847v.537h-3.623v-.492l2.728-3.945H20.63v-.54h3.47v.482l-2.738 3.958zm3.356-1.346c0-.363.07-.688.212-.978a1.61 1.61 0 01.595-.67 1.63 1.63 0 01.872-.236c.503 0 .91.175 1.22.523.312.349.468.813.468 1.391v.045c0 .36-.07.683-.209.971a1.559 1.559 0 01-.59.666c-.256.16-.55.239-.883.239-.501 0-.908-.174-1.22-.523-.31-.348-.465-.81-.465-1.384v-.044zm.636.075c0 .41.095.739.284.988a.918.918 0 00.765.372.908.908 0 00.766-.376c.19-.253.284-.606.284-1.059 0-.406-.097-.734-.29-.985a.912.912 0 00-.767-.379.908.908 0 00-.755.372c-.191.249-.287.604-.287 1.067zm6.545 1.808h-.632v-1.579h-1.699v1.579h-.635v-3.698h.635v1.603h1.7v-1.603h.631v3.698zm3.302 0a1.33 1.33 0 01-.089-.39 1.408 1.408 0 01-1.052.458c-.365 0-.665-.102-.9-.307a1.01 1.01 0 01-.348-.786c0-.385.146-.684.438-.896.294-.214.706-.321 1.237-.321h.615v-.291c0-.221-.066-.396-.198-.526-.132-.132-.327-.198-.585-.198a.921.921 0 00-.567.171c-.153.114-.23.251-.23.413h-.635c0-.184.065-.362.195-.533.132-.173.31-.31.533-.41.226-.1.473-.151.742-.151.426 0 .76.107 1.001.322.242.212.367.504.376.878v1.702c0 .34.044.61.13.81v.055h-.663zm-1.05-.482c.2 0 .387-.051.565-.154a.928.928 0 00.386-.4v-.758h-.496c-.774 0-1.162.226-1.162.68 0 .198.066.353.199.465a.765.765 0 00.509.167z"
          fill="#fff"
        />
        <Path
          d="M53.5 121h-9l-.5-17 16 .5-6.5 16.5z"
          fill="#D2A78E"
          stroke="#fff"
        />
        <Path
          d="M92.5 122L86 104.5l14.5.5v17h-8z"
          fill="#E9B843"
          stroke="#fff"
        />
        <Path d="M232 89h-17.5v17H232V89z" fill="#958B8A" stroke="#fff" />
        <Path
          d="M395 231l-8-42h-9v42h17zM401 316h-17.5v18H401v-18z"
          fill="#ADADAD"
          stroke="#fff"
        />
        <Path
          d="M131 164.5L113 184h32v-19.5h-14z"
          fill="#83A164"
          stroke="#fff"
        />
        <Path d="M159 162.5h-7V200h7v-37.5z" fill="#E9B843" stroke="#fff" />
        <Path d="M230 162.5h-14.5v12H230v-12z" fill="#968AB1" stroke="#fff" />
        <Path d="M241 162.5h-11.5v12H241v-12z" fill="#968AB1" stroke="#fff" />
        <Path
          d="M176 248l-12.5-14 6.5-7.125 6.272-6.875 6.614-7.25 6.614-7.25L202 220l-6.5 7-6.5 7-6.286 6.769L176 248z"
          fill="#933F39"
        />
        <Path
          d="M182.714 240.769L176 248l-12.5-14 6.5-7.125m12.714 13.894L170 226.875m12.714 13.894L189 234m-19-7.125l6.272-6.875M189 234l-12.728-14M189 234l6.5-7m-19.228-7l6.614-7.25M195.5 227l6.5-7-12.5-14.5-6.614 7.25M195.5 227l-12.614-14.25"
          stroke="#fff"
        />
        <Path
          d="M149 250l14.5-16 12.5 14-2 2h-25zM162.5 265.5h-17v27h17v-27zM189.5 317L178 304l-12.5 12.5L177 330l12.5-13zM201 330l-11.5-13-12.5 13 11.5 13 12.5-13z"
          fill="#933F39"
          stroke="#fff"
        />
        <Path
          d="M201 330l-11.5-13-12.5 13 11.5 13 12.5-13zM214.5 346L201 330l-12.5 13 14 16 12-13zM222.5 354.5h8.5V374h-15l6.5-19.5zM233.5 354.5h10V374h-10v-19.5zM243.5 354.5h6.5l3.5-3.5 10.5 11-10.5 12h-10v-19.5z"
          fill="#933F39"
          stroke="#fff"
        />
        <Path
          d="M253.5 351l5.5-6h20.5L264 362l-10.5-11zM276 339l-6.5-7 16-17.5 11 12L285 339h-9z"
          fill="#933F39"
          stroke="#fff"
        />
        <Path
          d="M276 339l-6.5-7 16-17.5 11 12L285 339h-9z"
          fill="#933F39"
          stroke="#fff"
        />
        <Path
          d="M299.5 287h-14v27.5l11 12 3-3.195V287zM293.5 265.5v18h-8v-18h8z"
          fill="#933F39"
          stroke="#fff"
        />
        <Path
          d="M299 244l-13 21.5h7.5v2h41c-1.2-16.4-8.5-33.833-12-40h-9L299 244z"
          fill="#419BDD"
          stroke="#fff"
        />
        <Path
          d="M335.5 268h-17v14.5h17V268zM335.5 282.5h-17v15h17v-15zM335.5 297.5h-17v18h17v-18z"
          fill="#83A164"
          stroke="#fff"
        />
        <Path
          d="M222.5 354.5l-8-8.5-12 13 13.5 15 6.5-19.5zM171 296.5h-9.5v16l4 4L178 304l-7-7.5z"
          fill="#933F39"
          stroke="#fff"
        />
        <Path d="M101 130v-25h14.5v25H101z" fill="#BF4638" stroke="#fff" />
        <Path
          d="M106.393 118.902h.271a.592.592 0 00.402-.134.452.452 0 00.147-.354c0-.333-.166-.5-.498-.5a.52.52 0 00-.375.135.463.463 0 00-.139.353h-.361c0-.225.082-.412.246-.56a.9.9 0 01.629-.225c.268 0 .478.071.631.213.152.142.228.339.228.592 0 .124-.04.243-.121.359a.714.714 0 01-.326.26.692.692 0 01.361.246.681.681 0 01.129.42c0 .255-.083.458-.25.607-.166.15-.383.225-.65.225s-.485-.072-.653-.217a.721.721 0 01-.25-.572h.364c0 .15.049.27.146.359.098.09.229.135.393.135.174 0 .308-.045.4-.137.093-.091.139-.222.139-.392 0-.166-.051-.292-.152-.381-.102-.089-.249-.134-.44-.137h-.271v-.295zm3.503.385c0 .423-.072.738-.216.943-.145.206-.371.309-.678.309-.303 0-.528-.1-.674-.301-.146-.202-.221-.502-.226-.902v-.482c0-.418.072-.729.216-.932.145-.203.371-.305.68-.305.306 0 .531.098.676.295.144.195.219.498.222.906v.469zm-.361-.494c0-.306-.043-.529-.129-.668-.086-.141-.222-.211-.408-.211-.185 0-.32.07-.404.209-.085.139-.129.354-.131.643v.578c0 .307.044.534.133.681.09.146.225.219.406.219.178 0 .31-.069.396-.207.088-.138.133-.355.137-.652v-.592zm2.012 1.707h-.363v-2.408l-.729.267v-.328l1.035-.388h.057v2.857z"
          fill="#fff"
        />
        <Path
          d="M144.5 105.5l-29-.5v25h29v-24.5z"
          fill="#BF4638"
          stroke="#fff"
        />
        <Path
          d="M125.785 119.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm7.008.769c0 .847-.145 1.475-.434 1.887-.289.411-.741.617-1.355.617-.607 0-1.056-.2-1.348-.601-.291-.404-.442-1.006-.453-1.805v-.965c0-.836.145-1.457.434-1.863.289-.406.742-.61 1.359-.61.612 0 1.063.197 1.352.59.289.391.437.995.445 1.813v.937zm-.723-.988c0-.612-.086-1.057-.258-1.336-.171-.281-.444-.422-.816-.422-.37 0-.639.139-.808.418-.17.279-.257.707-.262 1.285v1.157c0 .614.088 1.069.265 1.363.18.291.451.437.813.437.357 0 .621-.138.793-.414.174-.276.265-.711.273-1.304v-1.184zm5.375 3.414h-3.726v-.52l1.969-2.187c.291-.331.492-.599.601-.805.112-.208.168-.423.168-.644 0-.297-.09-.541-.269-.731-.18-.19-.42-.285-.719-.285-.36 0-.64.103-.84.309-.198.203-.297.487-.297.851h-.723c0-.523.168-.946.504-1.269.339-.323.791-.485 1.356-.485.528 0 .946.14 1.254.418.307.276.461.645.461 1.106 0 .56-.357 1.226-1.071 2l-1.523 1.652h2.855v.59z"
          fill="#fff"
        />
        <Path
          d="M144.5 105.5H159V130h-14.5v-24.5z"
          fill="#BF4638"
          stroke="#fff"
        />
        <Path
          d="M148.741 120.503h.339c.213-.003.381-.059.503-.169a.562.562 0 00.183-.441c0-.417-.207-.625-.622-.625a.65.65 0 00-.469.168.583.583 0 00-.174.442h-.451c0-.282.102-.515.307-.701.207-.187.469-.281.787-.281.335 0 .598.089.788.267.191.177.286.424.286.739a.778.778 0 01-.152.45.898.898 0 01-.407.324.866.866 0 01.451.308.845.845 0 01.161.525c0 .319-.104.572-.312.759-.208.187-.479.281-.813.281-.334 0-.605-.091-.815-.271a.9.9 0 01-.313-.716h.454c0 .188.061.337.183.45.122.112.286.168.491.168.218 0 .385-.057.5-.171.116-.114.174-.277.174-.49 0-.207-.064-.366-.191-.477-.127-.11-.31-.167-.549-.17h-.339v-.369zm4.38.481c0 .529-.091.922-.271 1.179-.181.257-.463.386-.848.386-.379 0-.66-.125-.842-.376-.182-.252-.277-.628-.283-1.128v-.603c0-.523.09-.911.271-1.165.181-.254.464-.381.85-.381.382 0 .664.123.844.369.181.244.274.622.279 1.133v.586zm-.452-.618c0-.382-.054-.661-.161-.835-.108-.176-.278-.263-.51-.263-.232 0-.4.087-.506.261-.106.174-.16.442-.163.803v.723c0 .384.055.668.166.852a.556.556 0 00.507.273c.223 0 .389-.086.496-.259.109-.172.166-.444.171-.815v-.74zm1.687.137h.339c.214-.003.381-.059.503-.169a.562.562 0 00.183-.441c0-.417-.207-.625-.622-.625a.65.65 0 00-.469.168.582.582 0 00-.173.442h-.452c0-.282.103-.515.308-.701.206-.187.468-.281.786-.281.335 0 .598.089.788.267.191.177.286.424.286.739 0 .155-.05.305-.151.45a.906.906 0 01-.408.324.873.873 0 01.452.308.852.852 0 01.161.525c0 .319-.104.572-.313.759-.208.187-.479.281-.813.281-.333 0-.605-.091-.815-.271a.9.9 0 01-.313-.716h.454a.58.58 0 00.184.45c.122.112.285.168.49.168.218 0 .385-.057.501-.171.115-.114.173-.277.173-.49 0-.207-.063-.366-.19-.477-.127-.11-.31-.167-.55-.17h-.339v-.369z"
          fill="#fff"
        />
        <Path d="M175 105.5h-16V130h16v-24.5z" fill="#BF4638" stroke="#fff" />
        <Path
          d="M163.741 120.503h.339c.213-.003.381-.059.503-.169a.562.562 0 00.183-.441c0-.417-.207-.625-.622-.625a.65.65 0 00-.469.168.583.583 0 00-.174.442h-.451c0-.282.102-.515.307-.701.207-.187.469-.281.787-.281.335 0 .598.089.788.267.191.177.286.424.286.739a.778.778 0 01-.152.45.898.898 0 01-.407.324.866.866 0 01.451.308.845.845 0 01.161.525c0 .319-.104.572-.312.759-.208.187-.479.281-.813.281-.334 0-.605-.091-.815-.271a.9.9 0 01-.313-.716h.454c0 .188.061.337.183.45.122.112.286.168.491.168.218 0 .385-.057.5-.171.116-.114.174-.277.174-.49 0-.207-.064-.366-.191-.477-.127-.11-.31-.167-.549-.17h-.339v-.369zm4.38.481c0 .529-.091.922-.271 1.179-.181.257-.463.386-.848.386-.379 0-.66-.125-.842-.376-.182-.252-.277-.628-.283-1.128v-.603c0-.523.09-.911.271-1.165.181-.254.464-.381.85-.381.382 0 .664.123.844.369.181.244.274.622.279 1.133v.586zm-.452-.618c0-.382-.054-.661-.161-.835-.108-.176-.278-.263-.51-.263-.232 0-.4.087-.506.261-.106.174-.16.442-.163.803v.723c0 .384.055.668.166.852a.556.556 0 00.507.273c.223 0 .389-.086.496-.259.109-.172.166-.444.171-.815v-.74zm2.937.94h.493v.369h-.493v.825h-.454v-.825h-1.619v-.266l1.592-2.464h.481v2.361zm-1.56 0h1.106v-1.743l-.054.098-1.052 1.645z"
          fill="#fff"
        />
        <Path d="M187.5 110.5H178v20h9.5v-20z" fill="#BF4638" stroke="#fff" />
        <Path
          d="M182.503 124.259v-.339c-.003-.213-.059-.381-.169-.503a.562.562 0 00-.441-.183c-.417 0-.625.207-.625.622a.65.65 0 00.168.469.583.583 0 00.442.174v.451a.905.905 0 01-.701-.307c-.187-.207-.281-.469-.281-.787 0-.335.089-.598.267-.788.177-.191.424-.286.739-.286.155 0 .305.051.45.152a.898.898 0 01.324.407.866.866 0 01.308-.451.845.845 0 01.525-.161c.319 0 .572.104.759.312.187.208.281.479.281.813 0 .334-.091.605-.271.815a.9.9 0 01-.716.313v-.454a.583.583 0 00.45-.183c.112-.122.168-.286.168-.491 0-.218-.057-.385-.171-.5-.114-.116-.277-.174-.49-.174-.207 0-.366.064-.477.191-.11.127-.167.31-.17.549v.339h-.369zm.481-4.38c.529 0 .922.091 1.179.271.257.181.386.463.386.848 0 .379-.125.66-.376.842-.252.182-.628.277-1.128.283h-.603c-.523 0-.911-.09-1.165-.271-.254-.181-.381-.464-.381-.85 0-.382.123-.664.369-.844.244-.181.622-.274 1.133-.279h.586zm-.618.452c-.382 0-.661.054-.835.161-.176.108-.263.278-.263.51 0 .232.087.4.261.506.174.106.442.16.803.163h.723c.384 0 .668-.055.852-.166a.556.556 0 00.273-.507c0-.223-.086-.389-.259-.496-.172-.109-.444-.166-.815-.171h-.74zm.352-1.238l-1.773-.18v-1.822h.418v1.438l.969.108a1.143 1.143 0 01-.154-.594c0-.323.108-.581.322-.771.214-.19.503-.286.867-.286.366 0 .655.1.867.298.21.197.315.473.315.828 0 .314-.087.57-.261.769-.175.198-.415.312-.723.339v-.427c.203-.028.357-.1.461-.217a.679.679 0 00.154-.464.602.602 0 00-.215-.493c-.143-.121-.341-.181-.593-.181-.238 0-.428.065-.571.195a.656.656 0 00-.218.515c0 .197.044.352.13.464l.098.12-.093.361z"
          fill="#fff"
        />
        <Path d="M202 110.5h-14.5v20H202v-20z" fill="#BF4638" stroke="#fff" />
        <Path
          d="M191.741 120.503h.339c.213-.003.381-.059.503-.169a.562.562 0 00.183-.441c0-.417-.207-.625-.622-.625a.65.65 0 00-.469.168.583.583 0 00-.174.442h-.451c0-.282.102-.515.307-.701.207-.187.469-.281.787-.281.335 0 .598.089.788.267.191.177.286.424.286.739a.778.778 0 01-.152.45.898.898 0 01-.407.324.866.866 0 01.451.308.845.845 0 01.161.525c0 .319-.104.572-.312.759-.208.187-.479.281-.813.281-.334 0-.605-.091-.815-.271a.9.9 0 01-.313-.716h.454c0 .188.061.337.183.45.122.112.286.168.491.168.218 0 .385-.057.5-.171.116-.114.174-.277.174-.49 0-.207-.064-.366-.191-.477-.127-.11-.31-.167-.549-.17h-.339v-.369zm4.38.481c0 .529-.091.922-.271 1.179-.181.257-.463.386-.848.386-.379 0-.66-.125-.842-.376-.182-.252-.277-.628-.283-1.128v-.603c0-.523.09-.911.271-1.165.181-.254.464-.381.85-.381.382 0 .664.123.844.369.181.244.274.622.279 1.133v.586zm-.452-.618c0-.382-.054-.661-.161-.835-.108-.176-.278-.263-.51-.263-.232 0-.4.087-.506.261-.106.174-.16.442-.163.803v.723c0 .384.055.668.166.852a.556.556 0 00.507.273c.223 0 .389-.086.496-.259.109-.172.166-.444.171-.815v-.74zm2.803-1.423v.383h-.083c-.352.007-.632.111-.84.313-.209.201-.329.486-.361.852.187-.215.442-.323.766-.323a.92.92 0 01.74.328c.185.218.278.499.278.844 0 .367-.1.66-.3.879-.199.22-.466.33-.801.33-.34 0-.616-.13-.828-.391-.211-.262-.317-.599-.317-1.011v-.173c0-.654.139-1.154.418-1.499.28-.347.695-.524 1.247-.532h.081zm-.594 1.601a.72.72 0 00-.427.14.726.726 0 00-.271.349v.166c0 .293.066.529.198.708.132.179.296.268.493.268a.573.573 0 00.479-.224c.117-.15.175-.346.175-.589 0-.244-.059-.441-.178-.591a.563.563 0 00-.469-.227z"
          fill="#fff"
        />
        <Path d="M223.5 110.5h-22v20h22v-20z" fill="#C74D84" stroke="#fff" />
        <Path
          d="M208.285 120.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm7.008.769c0 .847-.145 1.475-.434 1.887-.289.411-.741.617-1.355.617-.607 0-1.056-.2-1.348-.601-.291-.404-.442-1.006-.453-1.805v-.965c0-.836.145-1.457.434-1.863.289-.406.742-.61 1.359-.61.612 0 1.063.197 1.352.59.289.391.437.995.445 1.813v.937zm-.723-.988c0-.612-.086-1.057-.258-1.336-.171-.281-.444-.422-.816-.422-.37 0-.639.139-.808.418-.17.279-.257.707-.262 1.285v1.157c0 .614.088 1.069.265 1.363.18.291.451.437.813.437.357 0 .621-.138.793-.414.174-.276.265-.711.273-1.304v-1.184zm5.321-1.867l-2.356 5.281h-.758l2.348-5.094h-3.078v-.594h3.844v.407z"
          fill="#fff"
        />
        <Path d="M232 110.5h-8.5v20h8.5v-20z" fill="#83A164" stroke="#fff" />
        <Path
          d="M227.503 124.259v-.339c-.003-.213-.059-.381-.169-.503a.562.562 0 00-.441-.183c-.417 0-.625.207-.625.622a.65.65 0 00.168.469.583.583 0 00.442.174v.451a.905.905 0 01-.701-.307c-.187-.207-.281-.469-.281-.787 0-.335.089-.598.267-.788.177-.191.424-.286.739-.286.155 0 .305.051.45.152a.898.898 0 01.324.407.866.866 0 01.308-.451.845.845 0 01.525-.161c.319 0 .572.104.759.312.187.208.281.479.281.813 0 .334-.091.605-.271.815a.9.9 0 01-.716.313v-.454a.583.583 0 00.45-.183c.112-.122.168-.286.168-.491 0-.218-.057-.385-.171-.5-.114-.116-.277-.174-.49-.174-.207 0-.366.064-.477.191-.11.127-.167.31-.17.549v.339h-.369zm.481-4.38c.529 0 .922.091 1.179.271.257.181.386.463.386.848 0 .379-.125.66-.376.842-.252.182-.628.277-1.128.283h-.603c-.523 0-.911-.09-1.165-.271-.254-.181-.381-.464-.381-.85 0-.382.123-.664.369-.844.244-.181.622-.274 1.133-.279h.586zm-.618.452c-.382 0-.661.054-.835.161-.176.108-.263.278-.263.51 0 .232.087.4.261.506.174.106.442.16.803.163h.723c.384 0 .668-.055.852-.166a.556.556 0 00.273-.507c0-.223-.086-.389-.259-.496-.172-.109-.444-.166-.815-.171h-.74zm-.493-3.186a.82.82 0 01.474.142.943.943 0 01.324.378c.08-.186.197-.332.35-.439a.874.874 0 01.52-.164c.307 0 .552.104.734.313.183.206.274.479.274.817 0 .342-.091.616-.274.823-.184.205-.428.308-.734.308a.907.907 0 01-.52-.156.99.99 0 01-.352-.438.926.926 0 01-.325.374.837.837 0 01-.471.137c-.299 0-.537-.096-.713-.288-.176-.192-.264-.445-.264-.76 0-.312.088-.564.264-.756.176-.194.414-.291.713-.291zm1.658.369a.652.652 0 00-.486.19.668.668 0 00-.188.493c0 .204.062.367.185.491a.667.667 0 00.489.183c.202 0 .36-.059.476-.178.115-.121.173-.287.173-.501 0-.211-.058-.377-.173-.498a.635.635 0 00-.476-.18zm-2.263.678c0 .178.055.322.166.433a.603.603 0 00.446.163.611.611 0 00.44-.161.582.582 0 00.166-.435.575.575 0 00-.166-.432.604.604 0 00-.44-.163.605.605 0 00-.442.168.577.577 0 00-.17.427z"
          fill="#fff"
        />
        <Path
          d="M260.5 96.5H236v35s12.5 1 24.5 4.5V96.5z"
          fill="#83A164"
          stroke="#fff"
        />
        <Path
          d="M243.285 115.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm7.008.769c0 .847-.145 1.475-.434 1.887-.289.411-.741.617-1.355.617-.607 0-1.056-.2-1.348-.601-.291-.404-.442-1.006-.453-1.805v-.965c0-.836.145-1.457.434-1.863.289-.406.742-.61 1.359-.61.612 0 1.063.197 1.352.59.289.391.437.995.445 1.813v.937zm-.723-.988c0-.612-.086-1.057-.258-1.336-.171-.281-.444-.422-.816-.422-.37 0-.639.139-.808.418-.17.279-.257.707-.262 1.285v1.157c0 .614.088 1.069.265 1.363.18.291.451.437.813.437.357 0 .621-.138.793-.414.174-.276.265-.711.273-1.304v-1.184zm4.418.914c-.151.18-.332.324-.543.434a1.458 1.458 0 01-.687.164c-.328 0-.615-.081-.86-.243a1.582 1.582 0 01-.562-.679 2.335 2.335 0 01-.199-.973c0-.38.071-.723.215-1.027.145-.305.351-.538.617-.699.265-.162.575-.243.929-.243.563 0 1.006.211 1.329.633.325.419.488.992.488 1.719v.211c0 1.107-.219 1.915-.656 2.426-.438.507-1.098.768-1.981.781h-.14v-.609h.152c.596-.011 1.055-.166 1.375-.465.32-.302.495-.779.523-1.43zm-1.113 0c.242 0 .465-.074.668-.223.206-.148.355-.332.449-.55v-.289c0-.474-.103-.86-.308-1.157-.206-.297-.467-.445-.782-.445a.924.924 0 00-.765.367c-.193.242-.289.563-.289.961 0 .388.092.708.277.961a.89.89 0 00.75.375z"
          fill="#fff"
        />
        <Path
          d="M274.5 96.5h-14V136l12.5 4v-13.5h1.5v-30z"
          fill="#C74D84"
          stroke="#fff"
        />
        <Path
          d="M263.089 115.104h.407c.256-.004.457-.072.604-.203a.674.674 0 00.219-.53c0-.5-.249-.75-.747-.75-.234 0-.422.067-.562.202a.7.7 0 00-.208.531h-.542c0-.338.123-.619.369-.841.248-.225.562-.337.943-.337.403 0 .718.106.947.319.228.213.342.509.342.888 0 .185-.06.365-.181.539a1.08 1.08 0 01-.49.39c.235.074.415.197.542.369.129.172.194.381.194.63 0 .382-.125.686-.375.911-.25.224-.575.337-.976.337-.4 0-.726-.109-.978-.326-.25-.216-.375-.503-.375-.858h.545c0 .225.073.404.219.539.147.135.343.202.589.202.262 0 .462-.068.601-.205.138-.137.208-.333.208-.589 0-.248-.076-.438-.229-.571-.152-.133-.372-.201-.659-.205h-.407v-.442zm4.362 2.396h-.545v-3.612l-1.093.401v-.492l1.553-.583h.085v4.286zm4.263-1.819c0 .634-.109 1.106-.325 1.415-.217.308-.556.463-1.017.463-.455 0-.792-.151-1.011-.452-.218-.302-.332-.753-.34-1.353v-.724c0-.627.109-1.092.326-1.397.216-.305.556-.457 1.019-.457.459 0 .797.147 1.014.442.217.293.328.746.334 1.36v.703zm-.542-.742c0-.459-.065-.793-.193-1.001-.129-.211-.333-.317-.613-.317-.277 0-.479.105-.606.314-.127.209-.193.53-.197.963v.868c0 .461.067.801.2 1.022.134.219.338.328.609.328.268 0 .466-.103.595-.31.131-.207.199-.534.205-.979v-.888z"
          fill="#fff"
        />
        <Path
          d="M303 126.5h-30V140c10.5 4 20.5 11 24.5 14.5l5.5-9.5v-18.5z"
          fill="#C74D84"
          stroke="#fff"
        />
        <Path
          d="M285.285 136.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm5.817 3.195h-.727v-4.816l-1.457.535v-.657l2.07-.777h.114v5.715zm4.492 0h-.727v-4.816l-1.457.535v-.657l2.07-.777h.114v5.715z"
          fill="#fff"
        />
        <Path
          d="M362 78.5l-92.5-1v19h5v30H303V145l-5.5 9.5C313 166 329 184 337 194l5-5h45l-17-90.5h-8v-20z"
          fill="#D48477"
          stroke="#fff"
        />
        <Path
          d="M298.16 108.019c-.097.827-.403 1.466-.918 1.917-.512.448-1.194.671-2.047.671-.924 0-1.665-.331-2.223-.993-.555-.663-.833-1.549-.833-2.659v-.752c0-.727.129-1.366.387-1.917.261-.552.63-.974 1.106-1.268.477-.297 1.028-.446 1.655-.446.83 0 1.496.233 1.998.699.501.461.793 1.102.875 1.922h-1.036c-.09-.623-.285-1.074-.586-1.353-.297-.279-.714-.419-1.251-.419-.659 0-1.177.243-1.553.73-.372.487-.558 1.18-.558 2.079v.757c0 .849.177 1.524.532 2.025.354.502.85.752 1.487.752.573 0 1.012-.129 1.316-.387.308-.261.512-.714.613-1.358h1.036zm6.655-4.491h-2.514v6.972h-1.026v-6.972h-2.508v-.848h6.048v.848zm7.025 3.314c0 .767-.129 1.436-.386 2.009-.258.569-.623 1.004-1.096 1.305-.473.301-1.024.451-1.654.451-.616 0-1.162-.15-1.639-.451-.476-.304-.846-.736-1.111-1.294-.262-.562-.396-1.212-.403-1.95v-.564c0-.752.13-1.416.392-1.993.261-.576.63-1.016 1.106-1.321a2.978 2.978 0 011.644-.462c.626 0 1.178.152 1.654.457.48.301.849.739 1.107 1.316.257.573.386 1.24.386 2.003v.494zm-1.026-.505c0-.927-.186-1.638-.558-2.132-.373-.498-.894-.747-1.563-.747-.652 0-1.166.249-1.542.747-.372.494-.564 1.182-.574 2.063v.574c0 .899.188 1.606.564 2.122.379.512.9.768 1.563.768.666 0 1.181-.242 1.546-.725.366-.487.554-1.184.564-2.09v-.58zm4.603.65h-.95v3.513h-1.031v-7.82h1.031v3.448h.805l2.734-3.448h1.284l-2.986 3.792 3.206 4.028h-1.262l-2.831-3.513zm6.371-4.307l2.556 6.381 2.557-6.381h1.337v7.82h-1.031v-3.045l.097-3.288-2.568 6.333h-.789l-2.562-6.316.102 3.271v3.045h-1.031v-7.82h1.332zm12.686 5.779h-3.276l-.736 2.041h-1.064l2.987-7.82h.902l2.992 7.82h-1.058l-.747-2.041zm-2.965-.849h2.659l-1.332-3.657-1.327 3.657zm11.833 2.89h-1.037v-3.615h-3.942v3.615h-1.031v-7.82h1.031v3.362h3.942v-3.362h1.037v7.82zm7.842 0h-1.037v-3.615h-3.942v3.615h-1.032v-7.82h1.032v3.362h3.942v-3.362h1.037v7.82zM316.285 95.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.666-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.45.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.678.457 1.184 0 .247-.08.487-.242.719a1.438 1.438 0 01-.652.519c.312.099.553.263.723.492.171.23.257.51.257.84 0 .51-.166.915-.5 1.215-.333.3-.767.45-1.3.45-.534 0-.969-.145-1.305-.434-.333-.29-.5-.671-.5-1.145h.726c0 .3.098.54.293.719.196.18.457.27.786.27.349 0 .615-.092.8-.274.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.274h-.543v-.59zm5.817 3.195h-.727v-4.816l-1.457.535v-.656l2.07-.778h.114V98.5zm5.843 0h-3.726v-.52l1.969-2.187c.291-.33.492-.599.601-.805.112-.208.168-.423.168-.644 0-.297-.09-.54-.269-.73-.18-.19-.42-.286-.719-.286-.36 0-.64.103-.84.309-.198.203-.297.487-.297.851h-.723c0-.523.168-.946.504-1.27.339-.322.791-.484 1.356-.484.528 0 .946.14 1.254.418.307.276.461.645.461 1.106 0 .56-.357 1.226-1.071 2l-1.523 1.652h2.855v.59z"
          fill="#fff"
        />
        <Path
          d="M378 205v-16h-36l-5 5c1.2 1.2 6.833 10.833 9.5 15.5l11-6h18v1.5h2.5z"
          fill="#419BDD"
          stroke="#fff"
        />
        <Path
          d="M359.285 196.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm5.817 3.195h-.727v-4.816l-1.457.535v-.657l2.07-.777h.114v5.715zm3.168-3.195h.542c.342-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.312 0-.562.09-.75.27-.185.177-.277.412-.277.707h-.723c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.537 0 .957.142 1.262.426.304.284.457.679.457 1.184 0 .247-.081.487-.242.718a1.443 1.443 0 01-.653.52c.313.099.554.263.723.492.172.229.258.509.258.84 0 .51-.167.915-.5 1.215-.334.299-.767.449-1.301.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.727c0 .299.098.539.293.719.195.179.457.269.785.269.349 0 .616-.091.801-.273.185-.182.277-.444.277-.785 0-.331-.101-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.542v-.59z"
          fill="#fff"
        />
        <Path
          d="M357.5 203.5l-11 6 4.5 10h24.5v-16h-18z"
          fill="#83A164"
          stroke="#fff"
        />
        <Path
          d="M359.285 211.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm5.817 3.195h-.727v-4.816l-1.457.535v-.657l2.07-.777h.114v5.715zm5.168-1.91h.789v.59h-.789v1.32h-.727v-1.32h-2.59v-.426l2.547-3.942h.77v3.778zm-2.497 0h1.77v-2.789l-.086.156-1.684 2.633z"
          fill="#fff"
        />
        <Path
          d="M375.5 219.5H351l4 11.5h20.5v-11.5z"
          fill="#83A164"
          stroke="#fff"
        />
        <Path
          d="M361.241 224.503h.339c.213-.003.381-.059.503-.169a.562.562 0 00.183-.441c0-.417-.207-.625-.622-.625a.65.65 0 00-.469.168.583.583 0 00-.174.442h-.451c0-.282.102-.515.307-.701.207-.187.469-.281.787-.281.335 0 .598.089.788.267.191.177.286.424.286.739a.778.778 0 01-.152.45.898.898 0 01-.407.324.866.866 0 01.451.308.845.845 0 01.161.525c0 .319-.104.572-.312.759-.208.187-.479.281-.813.281-.334 0-.605-.091-.815-.271a.9.9 0 01-.313-.716h.454c0 .188.061.337.183.45.122.112.286.168.491.168.218 0 .385-.057.5-.171.116-.114.174-.277.174-.49 0-.207-.064-.366-.191-.477-.127-.11-.31-.167-.549-.17h-.339v-.369zm3.635 1.997h-.454v-3.01l-.911.334v-.41l1.294-.486h.071v3.572zm1.531-1.782l.18-1.773h1.822v.418h-1.438l-.108.969c.174-.103.372-.154.594-.154.323 0 .581.108.771.322.19.214.286.503.286.867 0 .366-.1.655-.298.867-.197.21-.473.315-.828.315-.314 0-.57-.087-.769-.261-.198-.175-.312-.415-.339-.723h.427c.028.203.1.357.217.461a.679.679 0 00.464.154c.21 0 .375-.071.493-.215.121-.143.181-.341.181-.593 0-.238-.065-.428-.195-.571a.656.656 0 00-.515-.218c-.197 0-.352.044-.464.13l-.12.098-.361-.093z"
          fill="#fff"
        />
        <Path
          d="M371.5 237.5H357l4 16h10.5v-16z"
          fill="#83A164"
          stroke="#fff"
        />
        <Path
          d="M362.241 245.503h.339c.213-.003.381-.059.503-.169a.562.562 0 00.183-.441c0-.417-.207-.625-.622-.625a.65.65 0 00-.469.168.583.583 0 00-.174.442h-.451c0-.282.102-.515.307-.701.207-.187.469-.281.787-.281.335 0 .598.089.788.267.191.177.286.424.286.739a.778.778 0 01-.152.45.898.898 0 01-.407.324.866.866 0 01.451.308.845.845 0 01.161.525c0 .319-.104.572-.312.759-.208.187-.479.281-.813.281-.334 0-.605-.091-.815-.271a.9.9 0 01-.313-.716h.454c0 .188.061.337.183.45.122.112.286.168.491.168.218 0 .385-.057.5-.171.116-.114.174-.277.174-.49 0-.207-.064-.366-.191-.477-.127-.11-.31-.167-.549-.17h-.339v-.369zm3.635 1.997h-.454v-3.01l-.911.334v-.41l1.294-.486h.071v3.572zm3.096-3.557v.383h-.083c-.352.007-.632.111-.84.313-.209.201-.329.486-.361.852.187-.215.442-.323.766-.323a.92.92 0 01.74.328c.185.218.278.499.278.844 0 .367-.1.66-.3.879-.199.22-.466.33-.801.33-.34 0-.616-.13-.828-.391-.211-.262-.317-.599-.317-1.011v-.173c0-.654.139-1.154.418-1.499.28-.347.695-.524 1.247-.532h.081zm-.594 1.601a.72.72 0 00-.427.14.726.726 0 00-.271.349v.166c0 .293.066.529.198.708.132.179.296.268.493.268a.573.573 0 00.479-.224c.117-.15.175-.346.175-.589 0-.244-.059-.441-.178-.591a.563.563 0 00-.469-.227z"
          fill="#fff"
        />
        <Path
          d="M385.5 253.5H361l2.5 16h38l-5.5-32h-10.5v16z"
          fill="#83A164"
          stroke="#fff"
        />
        <Path
          d="M375.785 262.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm5.817 3.195h-.727v-4.816l-1.457.535v-.657l2.07-.777h.114v5.715zm5.789-5.281l-2.356 5.281h-.758l2.348-5.094h-3.078v-.594h3.844v.407z"
          fill="#fff"
        />
        <Path d="M363.5 286.5h42l-4-17h-38v17z" fill="#83A164" stroke="#fff" />
        <Path
          d="M375.785 278.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm5.817 3.195h-.727v-4.816l-1.457.535v-.657l2.07-.777h.114v5.715zm5.566-4.203c0 .284-.076.536-.227.758-.148.221-.35.394-.605.519.297.128.531.314.703.559.175.245.262.522.262.832 0 .492-.167.884-.5 1.176-.331.291-.767.437-1.309.437-.547 0-.985-.146-1.316-.437-.328-.295-.492-.687-.492-1.176 0-.307.083-.585.25-.832.169-.248.402-.435.699-.563a1.492 1.492 0 01-.598-.519 1.34 1.34 0 01-.219-.754c0-.479.154-.859.461-1.141.308-.281.713-.422 1.215-.422.5 0 .904.141 1.211.422.31.282.465.662.465 1.141zm-.59 2.652c0-.317-.101-.577-.305-.777-.2-.201-.463-.301-.789-.301-.325 0-.587.099-.785.297-.195.198-.293.458-.293.781s.095.577.285.762c.193.185.46.277.801.277.339 0 .604-.092.797-.277.193-.188.289-.441.289-.762zm-1.086-3.621c-.284 0-.514.089-.691.266-.175.174-.262.413-.262.715 0 .289.086.523.258.703.174.177.406.265.695.265.289 0 .52-.088.692-.265.174-.18.261-.414.261-.703s-.09-.525-.269-.707a.919.919 0 00-.684-.274z"
          fill="#fff"
        />
        <Path
          d="M363.5 300H385v12h25l-4.5-25.5h-42V300z"
          fill="#83A164"
          stroke="#fff"
        />
        <Path
          d="M391.785 304.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm5.817 3.195h-.727v-4.816l-1.457.535v-.657l2.07-.777h.114v5.715zm4.886-2.5c-.151.18-.332.324-.543.434a1.458 1.458 0 01-.687.164c-.328 0-.615-.081-.86-.243a1.582 1.582 0 01-.562-.679 2.335 2.335 0 01-.199-.973c0-.38.071-.723.215-1.027.145-.305.351-.538.617-.699.265-.162.575-.243.929-.243.563 0 1.006.211 1.329.633.325.419.488.992.488 1.719v.211c0 1.107-.219 1.915-.656 2.426-.438.507-1.098.768-1.981.781h-.14v-.609h.152c.596-.011 1.055-.166 1.375-.465.32-.302.495-.779.523-1.43zm-1.113 0c.242 0 .465-.074.668-.223.206-.148.355-.332.449-.55v-.289c0-.474-.103-.86-.308-1.157-.206-.297-.467-.445-.782-.445a.924.924 0 00-.765.367c-.193.242-.289.563-.289.961 0 .388.092.708.277.961a.89.89 0 00.75.375zM376.41 295.754a1.745 1.745 0 01-.808.621 3.283 3.283 0 01-1.204.203c-.463 0-.875-.108-1.234-.324a2.204 2.204 0 01-.836-.93c-.195-.401-.295-.866-.301-1.394v-.496c0-.857.2-1.521.598-1.993.401-.471.964-.707 1.687-.707.594 0 1.072.153 1.434.457.362.302.583.732.664 1.289h-.75c-.14-.752-.588-1.128-1.344-1.128-.502 0-.884.177-1.144.531-.258.351-.388.862-.391 1.531v.465c0 .638.146 1.146.438 1.523.291.375.686.563 1.183.563.282 0 .528-.031.739-.094.211-.062.385-.168.523-.316v-1.278h-1.316v-.609h2.062v2.086zm3.75.746c-.042-.083-.075-.232-.101-.445a1.612 1.612 0 01-1.204.523c-.416 0-.759-.117-1.027-.351a1.152 1.152 0 01-.398-.899c0-.44.166-.781.5-1.023.336-.245.807-.367 1.414-.367h.703v-.333c0-.252-.076-.453-.227-.601-.151-.151-.373-.227-.668-.227-.257 0-.474.065-.648.196-.175.13-.262.287-.262.472h-.726c0-.211.074-.414.222-.609.151-.198.354-.354.61-.469.257-.114.54-.172.847-.172.487 0 .869.123 1.145.367.276.243.419.577.43 1.004v1.946c0 .388.049.696.148.926v.062h-.758zm-1.199-.551c.227 0 .441-.058.644-.176.204-.117.351-.269.442-.457v-.867h-.567c-.885 0-1.328.259-1.328.778 0 .226.076.403.227.531a.874.874 0 00.582.191zm6.512-1.515c0 .643-.147 1.161-.442 1.554-.294.394-.692.59-1.195.59-.513 0-.917-.163-1.211-.488v2.035h-.723v-5.852h.66l.036.469c.294-.364.703-.547 1.226-.547.508 0 .909.192 1.203.575.297.382.446.915.446 1.597v.067zm-.723-.082c0-.477-.102-.853-.305-1.129a.98.98 0 00-.836-.414c-.437 0-.765.194-.984.582v2.019c.216.386.547.578.992.578a.97.97 0 00.824-.41c.206-.276.309-.685.309-1.226zm3.203-.497l-.695.723v1.922h-.75v-5.688h.75v2.813l2.527-2.813h.906l-2.238 2.512 2.414 3.176h-.898l-2.016-2.645zm4.242 2.645h-.722v-4.227h.722v4.227zm-.781-5.348c0-.117.035-.216.106-.297.072-.08.179-.121.32-.121.14 0 .247.041.32.121.073.081.11.18.11.297a.411.411 0 01-.11.293c-.073.078-.18.117-.32.117-.141 0-.248-.039-.32-.117a.417.417 0 01-.106-.293zm1.766 3.2c0-.649.153-1.17.461-1.563a1.455 1.455 0 011.207-.594c.494 0 .886.17 1.175.508V290.5h.723v6h-.664l-.035-.453c-.289.354-.692.531-1.207.531-.49 0-.889-.2-1.199-.601-.308-.401-.461-.925-.461-1.571v-.054zm.722.082c0 .479.099.854.297 1.125.198.27.472.406.821.406.458 0 .792-.206 1.003-.617v-1.942c-.216-.398-.548-.597-.996-.597-.354 0-.63.136-.828.41-.198.273-.297.678-.297 1.215zm6.43.945a.525.525 0 00-.223-.453c-.145-.11-.402-.203-.769-.281-.365-.079-.655-.172-.871-.282a1.252 1.252 0 01-.477-.39.948.948 0 01-.152-.539c0-.347.146-.64.437-.879.295-.24.67-.36 1.125-.36.48 0 .868.124 1.164.371.3.248.45.564.45.95h-.727a.652.652 0 00-.254-.512.937.937 0 00-.633-.215c-.263 0-.468.057-.617.172a.542.542 0 00-.223.449c0 .175.07.306.208.395.138.088.386.173.746.254.362.08.655.177.879.289.223.112.389.247.496.406a.979.979 0 01.164.574c0 .378-.151.681-.453.91-.303.227-.694.34-1.176.34-.339 0-.638-.06-.899-.18a1.47 1.47 0 01-.613-.5 1.224 1.224 0 01-.219-.699h.723a.755.755 0 00.289.578c.182.141.422.211.719.211.273 0 .492-.054.656-.164a.513.513 0 00.25-.445z"
          fill="#fff"
        />
        <Path d="M385 300h-21.5v12H385v-12z" fill="#C74D84" stroke="#fff" />
        <Path
          d="M370.741 305.503h.339c.213-.003.381-.059.503-.169a.562.562 0 00.183-.441c0-.417-.207-.625-.622-.625a.65.65 0 00-.469.168.583.583 0 00-.174.442h-.451c0-.282.102-.515.307-.701.207-.187.469-.281.787-.281.335 0 .598.089.788.267.191.177.286.424.286.739a.778.778 0 01-.152.45.898.898 0 01-.407.324.866.866 0 01.451.308.845.845 0 01.161.525c0 .319-.104.572-.312.759-.208.187-.479.281-.813.281-.334 0-.605-.091-.815-.271a.9.9 0 01-.313-.716h.454c0 .188.061.337.183.45.122.112.286.168.491.168.218 0 .385-.057.5-.171.116-.114.174-.277.174-.49 0-.207-.064-.366-.191-.477-.127-.11-.31-.167-.549-.17h-.339v-.369zm4.48 1.997h-2.329v-.325l1.23-1.367c.182-.207.308-.374.376-.503a.839.839 0 00.105-.403.639.639 0 00-.168-.456.59.59 0 00-.45-.178c-.224 0-.399.064-.525.192-.123.127-.185.305-.185.533h-.452c0-.327.105-.592.315-.794.212-.202.494-.303.847-.303.331 0 .592.088.784.262.192.172.288.403.288.691 0 .35-.223.766-.669 1.25l-.952 1.032h1.785v.369zm2.707-1.516c0 .529-.09.922-.271 1.179-.18.257-.463.386-.847.386-.379 0-.66-.125-.842-.376-.183-.252-.277-.628-.283-1.128v-.603c0-.523.09-.911.271-1.165.18-.254.463-.381.849-.381.383 0 .664.123.845.369.181.244.273.622.278 1.133v.586zm-.451-.618c0-.382-.054-.661-.162-.835-.107-.176-.277-.263-.51-.263-.231 0-.399.087-.505.261-.106.174-.161.442-.164.803v.723c0 .384.056.668.166.852a.558.558 0 00.508.273c.223 0 .388-.086.496-.259.109-.172.166-.444.171-.815v-.74z"
          fill="#fff"
        />
        <Path
          d="M383.5 316h-20v10.5l9 9 3.5-3.5h7.5v-16z"
          fill="#83A164"
          stroke="#fff"
        />
        <Path
          d="M370.741 322.503h.339c.213-.003.381-.059.503-.169a.562.562 0 00.183-.441c0-.417-.207-.625-.622-.625a.65.65 0 00-.469.168.583.583 0 00-.174.442h-.451c0-.282.102-.515.307-.701.207-.187.469-.281.787-.281.335 0 .598.089.788.267.191.177.286.424.286.739a.778.778 0 01-.152.45.898.898 0 01-.407.324.866.866 0 01.451.308.845.845 0 01.161.525c0 .319-.104.572-.312.759-.208.187-.479.281-.813.281-.334 0-.605-.091-.815-.271a.9.9 0 01-.313-.716h.454c0 .188.061.337.183.45.122.112.286.168.491.168.218 0 .385-.057.5-.171.116-.114.174-.277.174-.49 0-.207-.064-.366-.191-.477-.127-.11-.31-.167-.549-.17h-.339v-.369zm4.48 1.997h-2.329v-.325l1.23-1.367c.182-.207.308-.374.376-.503a.839.839 0 00.105-.403.639.639 0 00-.168-.456.59.59 0 00-.45-.178c-.224 0-.399.064-.525.192-.123.127-.185.305-.185.533h-.452c0-.327.105-.592.315-.794.212-.202.494-.303.847-.303.331 0 .592.088.784.262.192.172.288.403.288.691 0 .35-.223.766-.669 1.25l-.952 1.032h1.785v.369zm1.963 0h-.455v-3.01l-.91.334v-.41l1.294-.486h.071v3.572z"
          fill="#fff"
        />
        <Path
          d="M376 332l-3.5 3.5c3.6 5.2 4.833 12.167 5 15v6H401V334h-17.5v-2H376z"
          fill="#83A164"
          stroke="#fff"
        />
        <Path d="M401 316h-17.5v18H401v-18z" fill="#ADADAD" stroke="#fff" />
        <Path
          d="M383.785 344.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm7.168 3.195h-3.726v-.52l1.968-2.187c.292-.331.493-.599.602-.805.112-.208.168-.423.168-.644 0-.297-.09-.541-.27-.731-.179-.19-.419-.285-.718-.285-.36 0-.64.103-.84.309-.198.203-.297.487-.297.851h-.723c0-.523.168-.946.504-1.269.339-.323.79-.485 1.356-.485.528 0 .946.14 1.253.418.308.276.461.645.461 1.106 0 .56-.356 1.226-1.07 2l-1.523 1.652h2.855v.59zm4.492 0h-3.726v-.52l1.969-2.187c.291-.331.492-.599.601-.805.112-.208.168-.423.168-.644 0-.297-.09-.541-.269-.731-.18-.19-.42-.285-.719-.285-.36 0-.64.103-.84.309-.198.203-.297.487-.297.851h-.723c0-.523.168-.946.504-1.269.339-.323.791-.485 1.356-.485.528 0 .946.14 1.254.418.307.276.461.645.461 1.106 0 .56-.357 1.226-1.071 2l-1.523 1.652h2.855v.59z"
          fill="#fff"
        />
        <Path
          d="M422 373.5l-5-27h-16v10h-23.5v5.5l23.5 12 21-.5z"
          fill="#83A164"
          stroke="#fff"
        />
        <Path
          d="M396.484 364.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.277.412-.277.707h-.723c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.262.426.304.284.457.679.457 1.184 0 .247-.081.487-.243.718a1.435 1.435 0 01-.652.52c.313.099.554.263.723.492.172.229.258.509.258.84 0 .51-.167.915-.5 1.215-.334.299-.767.449-1.301.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.727c0 .299.097.539.293.719.195.179.457.269.785.269.349 0 .616-.091.801-.273.184-.182.277-.444.277-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm7.168 3.195h-3.726v-.52l1.969-2.187c.291-.331.492-.599.601-.805.112-.208.168-.423.168-.644 0-.297-.09-.541-.269-.731-.18-.19-.42-.285-.719-.285-.36 0-.64.103-.84.309-.198.203-.297.487-.297.851h-.723c0-.523.168-.946.504-1.269.339-.323.791-.485 1.356-.485.528 0 .946.14 1.254.418.307.276.461.645.461 1.106 0 .56-.357 1.226-1.071 2l-1.523 1.652h2.855v.59zm1.817-3.195h.543c.341-.006.609-.095.804-.27.196-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.312 0-.562.09-.75.27-.185.177-.277.412-.277.707h-.723c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.537 0 .957.142 1.262.426.305.284.457.679.457 1.184 0 .247-.081.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.722.492.172.229.258.509.258.84 0 .51-.167.915-.5 1.215-.333.299-.767.449-1.301.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.727c0 .299.098.539.293.719.195.179.457.269.785.269.349 0 .616-.091.801-.273.185-.182.277-.444.277-.785 0-.331-.101-.585-.304-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm3.531 2.816c0-.125.036-.229.109-.312.076-.084.188-.125.336-.125.149 0 .261.041.336.125a.438.438 0 01.117.312c0 .12-.039.22-.117.301-.075.081-.187.121-.336.121-.148 0-.26-.04-.336-.121a.432.432 0 01-.109-.301zm4.395.379h-.727v-4.816l-1.457.535v-.657l2.07-.777h.114v5.715z"
          fill="#fff"
        />
        <Path
          d="M401 374l-23.5-12-1.5 7 33.5 37.5-3 3 6 5 7-16.5h7.5l-5-24.5-21 .5z"
          fill="#419BDD"
          stroke="#fff"
        />
        <Path
          d="M400.484 387.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.277.412-.277.707h-.723c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.262.426.304.284.457.679.457 1.184 0 .247-.081.487-.243.718a1.435 1.435 0 01-.652.52c.313.099.554.263.723.492.172.229.258.509.258.84 0 .51-.167.915-.5 1.215-.334.299-.767.449-1.301.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.727c0 .299.097.539.293.719.195.179.457.269.785.269.349 0 .616-.091.801-.273.184-.182.277-.444.277-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm7.168 3.195h-3.726v-.52l1.969-2.187c.291-.331.492-.599.601-.805.112-.208.168-.423.168-.644 0-.297-.09-.541-.269-.731-.18-.19-.42-.285-.719-.285-.36 0-.64.103-.84.309-.198.203-.297.487-.297.851h-.723c0-.523.168-.946.504-1.269.339-.323.791-.485 1.356-.485.528 0 .946.14 1.254.418.307.276.461.645.461 1.106 0 .56-.357 1.226-1.071 2l-1.523 1.652h2.855v.59zm1.817-3.195h.543c.341-.006.609-.095.804-.27.196-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.312 0-.562.09-.75.27-.185.177-.277.412-.277.707h-.723c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.537 0 .957.142 1.262.426.305.284.457.679.457 1.184 0 .247-.081.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.722.492.172.229.258.509.258.84 0 .51-.167.915-.5 1.215-.333.299-.767.449-1.301.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.727c0 .299.098.539.293.719.195.179.457.269.785.269.349 0 .616-.091.801-.273.185-.182.277-.444.277-.785 0-.331-.101-.585-.304-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm3.531 2.816c0-.125.036-.229.109-.312.076-.084.188-.125.336-.125.149 0 .261.041.336.125a.438.438 0 01.117.312c0 .12-.039.22-.117.301-.075.081-.187.121-.336.121-.148 0-.26-.04-.336-.121a.432.432 0 01-.109-.301zm5.746.379h-3.726v-.52l1.968-2.187c.292-.331.492-.599.602-.805.112-.208.168-.423.168-.644 0-.297-.09-.541-.27-.731-.179-.19-.419-.285-.718-.285-.36 0-.64.103-.84.309-.198.203-.297.487-.297.851h-.723c0-.523.168-.946.504-1.269.339-.323.79-.485 1.356-.485.528 0 .946.14 1.253.418.308.276.461.645.461 1.106 0 .56-.356 1.226-1.07 2l-1.523 1.652h2.855v.59z"
          fill="#fff"
        />
        <Path
          d="M357 429v-42.5c10.4-3.6 17-13.167 19-17.5l33.5 37.5L396 421l4 6.5c-12.8 14-36.667 10.5-47 7l2.5-5.5h1.5z"
          fill="#83A164"
          stroke="#fff"
        />
        <Path
          d="M373.285 397.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm7.168 3.195h-3.726v-.52l1.968-2.187c.292-.331.493-.599.602-.805.112-.208.168-.423.168-.644 0-.297-.09-.541-.27-.731-.179-.19-.419-.285-.718-.285-.36 0-.64.103-.84.309-.198.203-.297.487-.297.851h-.723c0-.523.168-.946.504-1.269.339-.323.79-.485 1.356-.485.528 0 .946.14 1.253.418.308.276.461.645.461 1.106 0 .56-.356 1.226-1.07 2l-1.523 1.652h2.855v.59zm3.817-1.91h.789v.59h-.789v1.32h-.727v-1.32h-2.59v-.426l2.547-3.942h.77v3.778zm-2.497 0h1.77v-2.789l-.086.156-1.684 2.633zM369.321 410.019c-.097.827-.403 1.466-.919 1.917-.512.448-1.194.671-2.046.671-.924 0-1.665-.331-2.224-.993-.555-.663-.832-1.549-.832-2.659v-.752c0-.727.129-1.366.387-1.917.261-.552.63-.974 1.106-1.268.476-.297 1.028-.446 1.654-.446.831 0 1.497.233 1.998.699.502.461.793 1.102.876 1.922h-1.037c-.089-.623-.284-1.074-.585-1.353-.297-.279-.715-.419-1.252-.419-.659 0-1.176.243-1.552.73-.372.487-.559 1.18-.559 2.079v.757c0 .849.178 1.524.532 2.025.355.502.851.752 1.488.752.573 0 1.012-.129 1.316-.387.308-.261.512-.714.612-1.358h1.037zm2.744-5.339l2.557 6.381 2.557-6.381h1.337v7.82h-1.031v-3.045l.097-3.288-2.568 6.333h-.789l-2.562-6.316.102 3.271v3.045h-1.032v-7.82h1.332zm13.203 0h1.031v7.82h-1.031v-6.026l-3.851 6.026h-1.037v-7.82h1.037v6.026l3.851-6.026zm4.941 4.307h-.951v3.513h-1.031v-7.82h1.031v3.448h.806l2.734-3.448h1.284l-2.987 3.792 3.207 4.028h-1.262l-2.831-3.513z"
          fill="#fff"
        />
        <Path
          d="M357 429v-42.5c-19.2 4.8-30.667-9-34-16.5l-9.5 9.5-43-.5v7.5H227V439h23v-9h16v9l76 1v-11h15z"
          fill="#83A164"
          stroke="#fff"
        />
        <Path
          d="M264.37 415.417h-1.026V413.5h-5.613v1.923H256.7l-.006-2.766h.639c.337-.38.604-.888.801-1.526.2-.641.326-1.342.376-2.105l.172-3.346h4.678v6.977h1.02l-.01 2.76zm-5.86-2.76h3.813v-6.129h-2.648l-.113 2.299c-.046.899-.166 1.665-.359 2.299-.19.634-.421 1.144-.693 1.531zm9.351.95c-.788 0-1.429-.257-1.923-.773-.494-.519-.741-1.212-.741-2.079v-.182c0-.577.109-1.091.327-1.542.222-.455.53-.809.924-1.063a2.324 2.324 0 011.289-.387c.756 0 1.343.249 1.762.747.419.497.628 1.21.628 2.137v.414h-3.937c.015.573.181 1.037.5 1.391.322.351.73.526 1.225.526.35 0 .648-.071.891-.214.244-.144.457-.333.639-.57l.607.473c-.487.748-1.217 1.122-2.191 1.122zm-.124-5.21a1.32 1.32 0 00-1.009.441c-.273.29-.441.698-.505 1.224h2.911v-.075c-.029-.505-.165-.895-.408-1.171-.244-.279-.573-.419-.989-.419zm7.799.097h-1.95v5.006h-.993v-5.006h-1.912v-.806h4.855v.806zm2.868 4.302c.355 0 .665-.107.929-.322.265-.215.412-.483.441-.806h.94c-.018.333-.133.65-.344.951a2.253 2.253 0 01-.849.72 2.42 2.42 0 01-1.117.268c-.791 0-1.421-.263-1.89-.789-.466-.53-.699-1.253-.699-2.17v-.167c0-.565.104-1.068.312-1.509.208-.44.505-.782.892-1.026.39-.243.85-.365 1.38-.365.652 0 1.192.195 1.622.586.433.39.664.896.693 1.52h-.94a1.356 1.356 0 00-.43-.924 1.31 1.31 0 00-.945-.366c-.505 0-.897.183-1.176.548-.276.362-.414.887-.414 1.574v.188c0 .67.138 1.185.414 1.547.275.362.669.542 1.181.542zm5.237-1.772h-.725v2.476h-.999v-5.812h.999v2.46h.65l1.955-2.46h1.203l-2.299 2.793 2.492 3.019h-1.262l-2.014-2.476zm7.89-3.336h.994v5.812h-.994v-4.238l-2.68 4.238h-.994v-5.812h.994v4.244l2.68-4.244zm6.349 0h.994v5.812h-.994v-4.238l-2.68 4.238h-.994v-5.812h.994v4.244l2.68-4.244zm.268-2.116c0 .434-.148.783-.445 1.048-.294.261-.681.392-1.161.392-.479 0-.868-.133-1.165-.398-.297-.265-.446-.612-.446-1.042h.811c0 .251.068.448.204.591.136.14.335.21.596.21.251 0 .446-.07.586-.21.143-.14.215-.337.215-.591h.805zm6.537.108l2.557 6.381 2.556-6.381h1.338v7.82h-1.032v-3.045l.097-3.288-2.567 6.333h-.79l-2.562-6.316.102 3.271v3.045h-1.031v-7.82h1.332zm11.876 2.008h.993v5.812h-.993v-4.238l-2.681 4.238h-.993v-5.812h.993v4.244l2.681-4.244zm7.498 2.971c0 .884-.203 1.597-.607 2.137-.405.541-.953.811-1.644.811-.705 0-1.26-.223-1.665-.671v2.798h-.994v-8.046h.908l.048.645c.405-.501.967-.752 1.687-.752.698 0 1.25.263 1.654.79.408.526.613 1.258.613 2.196v.092zm-.994-.113c0-.655-.14-1.173-.419-1.552-.279-.38-.662-.57-1.149-.57-.602 0-1.053.267-1.354.801v2.776c.297.53.752.795 1.364.795a1.34 1.34 0 001.134-.564c.283-.379.424-.941.424-1.686zM285.285 398.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm7.168 3.195h-3.726v-.52l1.968-2.187c.292-.331.493-.599.602-.805.112-.208.168-.423.168-.644 0-.297-.09-.541-.27-.731-.179-.19-.419-.285-.718-.285-.36 0-.64.103-.84.309-.198.203-.297.487-.297.851h-.723c0-.523.168-.946.504-1.269.339-.323.79-.485 1.356-.485.528 0 .946.14 1.253.418.308.276.461.645.461 1.106 0 .56-.356 1.226-1.07 2l-1.523 1.652h2.855v.59zm1.098-2.852l.289-2.836h2.914v.668h-2.301l-.172 1.551c.279-.164.595-.246.949-.246.519 0 .93.172 1.235.516.305.341.457.803.457 1.387 0 .585-.159 1.048-.477 1.386-.315.336-.756.504-1.324.504-.503 0-.913-.139-1.23-.418-.318-.278-.499-.664-.543-1.156h.683c.045.325.16.572.348.738.187.164.435.246.742.246.336 0 .599-.114.789-.343.193-.23.289-.546.289-.95 0-.38-.104-.685-.312-.914-.206-.232-.481-.347-.825-.347-.315 0-.562.069-.742.207l-.191.156-.578-.149z"
          fill="#fff"
        />
        <Path
          d="M256 375l20.5-22.5 43.5.5c-.4 7.2 1.833 14.333 3 17l-9.5 9.5-57.5-.5v-4z"
          fill="#83A164"
          stroke="#fff"
        />
        <Path
          d="M290.285 359.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm7.168 3.195h-3.726v-.52l1.968-2.187c.292-.331.493-.599.602-.805.112-.208.168-.423.168-.644 0-.297-.09-.541-.27-.731-.179-.19-.419-.285-.718-.285-.36 0-.64.103-.84.309-.198.203-.297.487-.297.851h-.723c0-.523.168-.946.504-1.269.339-.323.79-.485 1.356-.485.528 0 .946.14 1.253.418.308.276.461.645.461 1.106 0 .56-.356 1.226-1.07 2l-1.523 1.652h2.855v.59zm3.602-5.691v.613h-.133c-.563.01-1.011.177-1.344.5-.333.323-.526.777-.578 1.363.299-.344.708-.515 1.227-.515.494 0 .889.174 1.183.523.297.349.445.799.445 1.352 0 .585-.16 1.054-.48 1.406-.318.351-.745.527-1.281.527-.545 0-.986-.208-1.324-.625-.339-.419-.508-.958-.508-1.617v-.277c0-1.047.222-1.847.668-2.399.448-.555 1.113-.838 1.996-.851h.129zm-.95 2.562c-.247 0-.475.074-.683.223a1.161 1.161 0 00-.434.558v.266c0 .469.106.846.317 1.133.211.286.474.429.789.429.325 0 .58-.119.765-.359.188-.239.282-.553.282-.941 0-.391-.095-.706-.286-.946a.9.9 0 00-.75-.363zM276.199 364.812l1.86 4.641 1.859-4.641h.973v5.688h-.75v-2.215l.07-2.39-1.867 4.605h-.574l-1.864-4.594.074 2.379v2.215h-.75v-5.688h.969zm5.711 3.536c0-.414.081-.787.242-1.118.164-.33.391-.585.68-.765.292-.18.624-.27.996-.27.576 0 1.04.2 1.395.598.356.398.535.928.535 1.59v.051c0 .411-.08.781-.238 1.109a1.795 1.795 0 01-1.684 1.035c-.573 0-1.038-.199-1.395-.598-.354-.398-.531-.925-.531-1.582v-.05zm.727.086c0 .468.108.845.324 1.128.219.284.51.426.875.426.367 0 .659-.143.875-.429.216-.289.324-.693.324-1.211 0-.464-.111-.839-.332-1.125a1.043 1.043 0 00-.875-.434c-.357 0-.644.142-.863.426-.219.284-.328.69-.328 1.219zm5.008-3.184v1.023h.789v.559h-.789v2.621c0 .169.035.297.105.383.07.083.19.125.359.125.084 0 .198-.016.344-.047v.586c-.19.052-.375.078-.555.078-.322 0-.566-.098-.73-.293-.164-.195-.246-.473-.246-.832v-2.621h-.77v-.559h.77v-1.023h.723zm2.359 1.535c.32-.393.737-.59 1.25-.59.893 0 1.344.504 1.351 1.512v2.793h-.722v-2.797c-.003-.305-.073-.53-.211-.676-.136-.145-.348-.218-.637-.218-.234 0-.44.062-.617.187a1.274 1.274 0 00-.414.492v3.012h-.723v-6h.723v2.285zm5.437 3.793c-.573 0-1.039-.187-1.398-.562-.359-.378-.539-.882-.539-1.512v-.133c0-.419.079-.793.238-1.121.162-.331.386-.589.672-.773.289-.188.602-.282.938-.282.549 0 .976.181 1.281.543.305.362.457.88.457 1.555v.301h-2.863c.01.416.131.754.363 1.011.234.256.531.383.89.383.256 0 .472-.052.649-.156.177-.104.332-.242.465-.414l.441.344c-.354.544-.885.816-1.594.816zm-.089-3.789a.964.964 0 00-.735.32c-.198.211-.32.508-.367.891h2.117v-.055c-.021-.367-.12-.651-.297-.851-.177-.203-.416-.305-.718-.305zm4.621.133a2.201 2.201 0 00-.356-.027c-.474 0-.795.201-.965.605v3h-.722v-4.227h.703l.012.489c.237-.378.572-.567 1.007-.567.141 0 .248.019.321.055v.672zm2.285 3.066c.258 0 .483-.078.676-.234a.828.828 0 00.32-.586h.684a1.321 1.321 0 01-.25.691c-.154.219-.36.394-.618.524-.255.13-.526.195-.812.195-.576 0-1.034-.191-1.375-.574-.339-.386-.508-.912-.508-1.578v-.121c0-.412.076-.778.227-1.098.151-.32.367-.569.648-.746a1.858 1.858 0 011.004-.266c.474 0 .867.142 1.18.426.315.284.483.652.504 1.106h-.684a.982.982 0 00-.313-.672.954.954 0 00-.687-.266c-.367 0-.652.133-.856.399-.2.263-.3.644-.3 1.144v.137c0 .487.1.862.3 1.125.201.263.487.394.86.394zm5.101.512c-.041-.083-.075-.232-.101-.445a1.612 1.612 0 01-1.203.523c-.417 0-.759-.117-1.028-.351a1.155 1.155 0 01-.398-.899c0-.44.167-.781.5-1.023.336-.245.807-.367 1.414-.367h.703v-.333c0-.252-.075-.453-.226-.601-.152-.151-.374-.227-.668-.227-.258 0-.474.065-.649.196-.174.13-.262.287-.262.472h-.726a.99.99 0 01.223-.609c.151-.198.354-.354.609-.469.258-.114.54-.172.848-.172.487 0 .868.123 1.144.367.276.243.419.577.43 1.004v1.946c0 .388.049.696.148.926v.062h-.758zm-1.199-.551c.227 0 .442-.058.645-.176.203-.117.35-.269.441-.457v-.867h-.566c-.886 0-1.328.259-1.328.778 0 .226.075.403.226.531a.874.874 0 00.582.191zm4.985-3.027a2.201 2.201 0 00-.356-.027c-.474 0-.796.201-.965.605v3h-.722v-4.227h.703l.011.489c.237-.378.573-.567 1.008-.567.141 0 .248.019.321.055v.672zm2.343 3.656c-.573 0-1.039-.187-1.398-.562-.36-.378-.539-.882-.539-1.512v-.133c0-.419.079-.793.238-1.121.162-.331.385-.589.672-.773.289-.188.601-.282.937-.282.55 0 .977.181 1.282.543.304.362.457.88.457 1.555v.301h-2.864c.011.416.132.754.364 1.011.234.256.531.383.89.383.256 0 .472-.052.649-.156.177-.104.332-.242.465-.414l.441.344c-.354.544-.885.816-1.594.816zm-.09-3.789a.963.963 0 00-.734.32c-.198.211-.32.508-.367.891h2.117v-.055c-.021-.367-.12-.651-.297-.851-.177-.203-.416-.305-.719-.305z"
          fill="#fff"
        />
        <Path d="M44 164v21.5H0V164h44z" fill="#8F9591" stroke="#fff" />
        <Path
          d="M27.437 174.704h.475c.299-.004.533-.083.704-.236.171-.152.257-.359.257-.618 0-.584-.291-.875-.872-.875-.274 0-.492.078-.656.235-.162.155-.243.362-.243.619h-.632c0-.394.143-.721.43-.981.29-.262.657-.393 1.101-.393.47 0 .837.124 1.104.373.267.248.4.593.4 1.035 0 .217-.07.426-.212.629-.139.203-.33.355-.57.455.273.086.483.23.632.43.15.201.225.446.225.735 0 .447-.146.801-.437 1.063-.292.262-.672.393-1.139.393-.467 0-.847-.126-1.141-.379-.292-.253-.438-.587-.438-1.001h.636c0 .262.085.471.256.628.171.158.4.236.687.236.306 0 .54-.08.701-.239.162-.16.243-.389.243-.687 0-.289-.09-.512-.267-.667-.178-.154-.434-.234-.769-.239h-.475v-.516zm3.93 0h.476c.298-.004.533-.083.704-.236.17-.152.256-.359.256-.618 0-.584-.29-.875-.871-.875-.274 0-.492.078-.657.235-.161.155-.242.362-.242.619H30.4c0-.394.144-.721.431-.981.29-.262.656-.393 1.1-.393.47 0 .838.124 1.105.373.266.248.4.593.4 1.035 0 .217-.071.426-.212.629-.14.203-.33.355-.571.455.273.086.484.23.632.43.15.201.226.446.226.735 0 .447-.146.801-.438 1.063-.291.262-.67.393-1.138.393-.467 0-.848-.126-1.141-.379-.292-.253-.438-.587-.438-1.001h.636c0 .262.085.471.256.628.17.158.4.236.687.236.305 0 .539-.08.7-.239.163-.16.243-.389.243-.687 0-.289-.088-.512-.266-.667-.178-.154-.434-.234-.77-.239h-.474v-.516zm5.435.608c-.132.158-.29.284-.475.38a1.27 1.27 0 01-.601.143c-.288 0-.538-.07-.752-.211a1.39 1.39 0 01-.493-.595 2.046 2.046 0 01-.174-.851c0-.333.063-.633.188-.899a1.4 1.4 0 01.54-.612c.233-.141.504-.212.814-.212.492 0 .88.185 1.162.554.285.367.427.868.427 1.504v.184c0 .969-.191 1.676-.574 2.123-.383.444-.96.672-1.733.683h-.123v-.533h.133c.522-.009.923-.144 1.203-.407.28-.264.433-.681.458-1.251zm-.974 0a.967.967 0 00.585-.194c.18-.13.31-.291.393-.482v-.253c0-.415-.09-.752-.27-1.012-.18-.26-.408-.39-.684-.39a.812.812 0 00-.67.322c-.169.212-.253.492-.253.841 0 .339.081.619.243.84a.779.779 0 00.656.328z"
          fill="#fff"
        />
        <Path
          d="M44 185.5c.333 7 4.4 22.5 18 28.5 7-9 26.6-4.5 27 7.5.478 14.341-14.584 15.428-22.462 12H58l-.5 81.5h-44L0 300V185.5h44z"
          fill="#E9B843"
        />
        <Path
          d="M62 214c-13.6-6-17.667-21.5-18-28.5H0V300l13.5 15h44l.5-81.5h8.538M62 214c7-9 26.6-4.5 27 7.5.478 14.341-14.584 15.428-22.462 12M62 214c-5.5 6.5-4 15 3.5 19 .33.176.676.343 1.038.5"
          stroke="#fff"
        />
        <Path
          d="M22.785 241.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.33-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.97-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm4.492 0h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.277.412-.277.707h-.723c0-.451.164-.825.492-1.121.33-.3.75-.45 1.258-.45.536 0 .957.142 1.262.426.304.284.457.679.457 1.184 0 .247-.081.487-.243.718a1.44 1.44 0 01-.652.52c.313.099.553.263.723.492.172.229.258.509.258.84 0 .51-.167.915-.5 1.215-.334.299-.767.449-1.301.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.727c0 .299.097.539.293.719.195.179.457.269.785.269.349 0 .616-.091.8-.273.186-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm6.891-1.008c0 .284-.076.536-.227.758-.148.221-.35.394-.605.519.297.128.531.314.703.559.175.245.262.522.262.832 0 .492-.167.884-.5 1.176-.33.291-.767.437-1.309.437-.547 0-.985-.146-1.316-.437-.328-.295-.492-.687-.492-1.176 0-.307.083-.585.25-.832a1.58 1.58 0 01.699-.563 1.492 1.492 0 01-.598-.519 1.341 1.341 0 01-.219-.754c0-.479.154-.859.461-1.141.308-.281.713-.422 1.215-.422.5 0 .904.141 1.211.422.31.282.465.662.465 1.141zm-.59 2.652c0-.317-.101-.577-.305-.777-.2-.201-.463-.301-.789-.301-.325 0-.587.099-.785.297-.195.198-.293.458-.293.781s.095.577.285.762c.193.185.46.277.801.277.339 0 .604-.092.797-.277.193-.188.29-.441.29-.762zm-1.086-3.621c-.284 0-.514.089-.691.266-.175.174-.262.413-.262.715 0 .289.086.523.258.703.174.177.406.265.695.265.29 0 .52-.088.692-.265.174-.18.261-.414.261-.703s-.09-.525-.27-.707a.917.917 0 00-.683-.274zM15.55 248.796h-3.085v1.916h1.591c.668.009 1.19.18 1.565.514s.562.788.562 1.362c0 .578-.189 1.037-.567 1.38-.378.343-.893.52-1.547.532h-2.452v-6.398h3.933v.694zm-3.085 2.61v2.404h1.543c.419 0 .744-.111.975-.334.235-.223.352-.521.352-.896 0-.361-.113-.645-.338-.853-.223-.208-.54-.315-.954-.321h-1.578zm4.518.673c0-.466.09-.885.272-1.257.185-.372.44-.659.765-.862a2.094 2.094 0 011.12-.303c.648 0 1.171.224 1.57.673.4.448.601 1.044.601 1.788v.057c0 .463-.089.879-.267 1.248-.176.367-.43.652-.76.857a2.095 2.095 0 01-1.135.308c-.644 0-1.167-.224-1.568-.672-.399-.449-.598-1.042-.598-1.78v-.057zm.817.096c0 .528.122.951.365 1.27.246.32.574.479.984.479.413 0 .742-.161.985-.483.243-.325.364-.779.364-1.362 0-.522-.124-.944-.373-1.266a1.174 1.174 0 00-.984-.488c-.402 0-.725.16-.972.479-.246.32-.369.777-.369 1.371zm6.016 1.134l1.108-3.564h.87l-1.912 5.489c-.296.791-.766 1.186-1.41 1.186l-.154-.013-.303-.057v-.659l.22.017c.275 0 .489-.055.641-.166.155-.112.283-.315.382-.611l.18-.484-1.696-4.702h.888l1.186 3.564zm6.42-3.564v4.755h-.817v-4.083h-1.617l-.096 1.78c-.053.818-.19 1.402-.413 1.754-.22.351-.57.534-1.05.549h-.326v-.716l.233-.018c.264-.029.453-.182.567-.457.114-.275.187-.785.22-1.529l.087-2.035h3.213zm4.382 0h.813v4.755h-.813v-3.467l-2.193 3.467h-.813v-4.755h.813v3.472l2.193-3.472zm6.003 4.755h-.813v-2.03h-2.184v2.03h-.817v-4.755h.817v2.061h2.184v-2.061h.813v4.755zm4.381-4.083H42.81v4.083h-.818v-4.755h3.01v.672zm-38.144 8.25l.466.316a2.071 2.071 0 00-.422 1.204v.598h-.809v-.51c0-.299.07-.595.211-.888.144-.293.328-.533.554-.72zm1.384 0l.466.316a2.071 2.071 0 00-.422 1.204v.598h-.808v-.51c0-.299.07-.595.21-.888.144-.293.329-.533.554-.72zm5.955.435v6.398h-.848v-2.65c-.308.088-.588.15-.84.185a6.9 6.9 0 01-.861.048c-.73 0-1.271-.158-1.626-.475-.355-.316-.536-.801-.545-1.454v-2.052h.848v2.03c.003.445.104.766.303.962.203.197.542.295 1.02.295.557 0 1.123-.079 1.7-.238v-3.049h.849zm3.37 6.486c-.644 0-1.169-.211-1.573-.633-.404-.425-.606-.992-.606-1.701v-.149c0-.472.09-.892.268-1.261a2.11 2.11 0 01.756-.87 1.902 1.902 0 011.054-.317c.618 0 1.099.204 1.442.611.342.407.514.99.514 1.749v.338H16.2c.011.469.148.849.408 1.139a1.3 1.3 0 001.002.43c.287 0 .53-.058.73-.175.199-.118.373-.273.523-.466l.496.386c-.398.613-.996.919-1.793.919zm-.1-4.263c-.329 0-.604.12-.827.361-.223.237-.36.571-.413 1.002h2.382v-.062c-.024-.413-.135-.732-.334-.958-.2-.229-.469-.343-.809-.343zm5.638 3.098l1.617-3.678h1.015v4.755h-.813v-3.458l-1.538 3.458h-.563l-1.569-3.533v3.533h-.813v-4.755h1.055l1.609 3.678zm7.83 1.077h-.812v-4.083h-2.189v4.083h-.817v-4.755h3.819v4.755zm4.382-4.755h.813v4.755h-.813v-3.467l-2.193 3.467h-.813v-4.755h.813v3.472l2.193-3.472zm1.903 2.334c0-.466.09-.885.272-1.257.185-.372.44-.659.765-.862a2.094 2.094 0 011.12-.303c.648 0 1.17.224 1.57.673.4.448.601 1.044.601 1.788v.057c0 .463-.089.879-.268 1.248-.175.367-.429.652-.76.857a2.095 2.095 0 01-1.134.308c-.644 0-1.167-.224-1.569-.672-.398-.449-.597-1.042-.597-1.78v-.057zm.817.096c0 .528.122.951.365 1.27.246.32.574.479.984.479.413 0 .741-.161.985-.483.243-.325.364-.779.364-1.362 0-.522-.124-.944-.373-1.266a1.174 1.174 0 00-.985-.488c-.4 0-.725.16-.97.479-.247.32-.37.777-.37 1.371zm8.416 2.325h-.813v-2.03h-2.184v2.03h-.818v-4.755h.818v2.061h2.184v-2.061h.813v4.755zm1.42-4.597l-.462-.316c.272-.381.413-.782.422-1.204v-.633h.804v.571a2.03 2.03 0 01-.22.879 2 2 0 01-.545.703zm1.348 0l-.461-.316c.272-.381.413-.782.422-1.204v-.633h.804v.571a2.029 2.029 0 01-.22.879 2 2 0 01-.545.703z"
          fill="#fff"
        />
        <Path
          d="M145.5 265.5l-87.5-1v44h30V292l57.5 1v-27.5z"
          fill="#419BDD"
          stroke="#fff"
        />
        <Path
          d="M66.785 297.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.33-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.97-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.727c0 .299.097.539.292.719.196.179.458.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm4.492 0h.543c.342-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.33-.3.75-.45 1.258-.45.536 0 .957.142 1.262.426.304.284.457.679.457 1.184 0 .247-.081.487-.243.718a1.44 1.44 0 01-.652.52c.313.099.553.263.723.492.172.229.258.509.258.84 0 .51-.167.915-.5 1.215-.334.299-.767.449-1.301.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.727c0 .299.097.539.293.719.195.179.457.269.785.269.349 0 .616-.091.8-.273.186-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm7.114-2.086l-2.356 5.281h-.758l2.348-5.094h-3.078v-.594h3.844v.407zM79.555 276.522l-.754-.003.022-5.071-2.804-.012-.022 5.07-.75-.003.025-5.687 4.308.018-.025 5.688zm4.737-4.206l-.018 4.226-.727-.003.016-3.629-1.437-.006-.093 1.582c-.05.726-.175 1.245-.374 1.557-.197.311-.509.473-.936.484l-.289-.001.003-.637.207-.015c.235-.025.403-.159.506-.404.102-.244.17-.697.201-1.358l.086-1.809 2.856.013zm3.751 4.243c-.04-.084-.074-.232-.1-.446a1.61 1.61 0 01-1.204.518c-.417-.002-.76-.12-1.026-.356a1.151 1.151 0 01-.395-.9c.002-.44.17-.78.505-1.021.337-.244.809-.364 1.415-.361l.703.003.002-.332c.001-.253-.074-.454-.224-.603-.15-.151-.373-.228-.667-.229a1.057 1.057 0 00-.65.192c-.174.13-.262.287-.263.472l-.727-.003c.001-.211.076-.414.226-.609a1.55 1.55 0 01.611-.466c.258-.113.541-.169.849-.168.486.002.867.126 1.142.372.275.244.417.579.426 1.006l-.009 1.945c-.001.388.047.697.145.927v.062l-.759-.003zm-1.196-.556c.226.001.441-.057.645-.173.204-.116.351-.268.443-.455l.004-.867-.566-.003c-.886-.004-1.33.253-1.332.772 0 .226.074.404.225.532.15.128.344.193.58.194zm6.392.579l-.723-.004.008-1.804-1.941-.009-.008 1.805-.727-.003.019-4.227.726.003-.008 1.832 1.942.009.008-1.832.722.003-.018 4.227zm2.917.09c-.573-.002-1.038-.192-1.396-.568-.357-.379-.535-.884-.532-1.514v-.133a2.54 2.54 0 01.244-1.12 1.88 1.88 0 01.675-.771c.29-.186.603-.278.939-.277.55.003.975.185 1.279.549.303.363.453.882.45 1.556l-.002.301-2.863-.012c.009.416.128.754.36 1.013.232.256.529.385.888.387.255.001.472-.05.65-.154.177-.103.332-.24.466-.412l.44.346c-.357.543-.89.812-1.598.809zm-.073-3.789a.96.96 0 00-.736.317c-.198.21-.322.506-.37.889l2.116.009v-.054c-.019-.368-.116-.652-.293-.853-.176-.204-.415-.307-.717-.308zm5.672.095l-1.418-.006-.016 3.64-.723-.003.016-3.64-1.39-.006.002-.586 3.531.015-.002.586zm3.234 3.655c-.042-.084-.075-.232-.1-.446a1.61 1.61 0 01-1.205.518c-.417-.002-.759-.12-1.026-.356a1.152 1.152 0 01-.395-.9c.002-.44.17-.781.505-1.021.337-.244.809-.364 1.415-.361l.704.003.001-.332c.001-.253-.074-.454-.224-.603-.15-.151-.373-.228-.667-.229a1.056 1.056 0 00-.649.192c-.175.13-.263.287-.264.472l-.727-.003a1 1 0 01.226-.609c.152-.197.355-.352.611-.466a2.08 2.08 0 01.849-.168c.487.002.868.126 1.143.372.275.243.416.579.425 1.006l-.009 1.945c-.001.388.047.697.145.927l-.001.062-.757-.003zm-1.197-.556c.226.001.442-.057.645-.173.204-.117.352-.268.444-.455l.003-.867-.566-.003c-.885-.004-1.329.253-1.332.772-.001.226.074.404.225.532a.87.87 0 00.581.194zm9.228-1.214c-.073.601-.298 1.065-.674 1.392-.374.324-.871.484-1.491.482-.671-.003-1.209-.247-1.614-.73-.401-.484-.6-1.129-.597-1.936l.003-.547c.002-.529.098-.993.287-1.394.192-.4.462-.706.809-.918a2.22 2.22 0 011.204-.319c.605.003 1.088.174 1.451.514.363.338.574.805.631 1.401l-.754-.003c-.063-.453-.204-.782-.422-.986-.215-.204-.518-.307-.908-.309-.48-.002-.857.174-1.132.527-.272.353-.41.856-.412 1.51l-.003.55c-.002.617.124 1.109.38 1.475.257.365.617.549 1.08.551.417.002.736-.09.958-.277.225-.189.375-.518.45-.986l.754.003zm2.293.756l.999-3.163.773.003-1.72 4.871c-.266.702-.686 1.052-1.259 1.05l-.137-.013-.269-.052.003-.586.195.017c.245.001.435-.048.571-.146.138-.098.252-.279.342-.542l.162-.429-1.489-4.186.789.004 1.04 3.172zm3.21-3.154l-.016 3.637 1.547.007.015-3.637.723.003-.016 3.637 1.543.007.016-3.637.727.003-.019 4.227-5.265-.023.018-4.227.727.003zm8.414.037l.722.003-.018 4.227-.723-.004.014-3.082-1.963 3.074-.723-.003.019-4.227.722.003-.013 3.086 1.963-3.077zm3.991 4.732l-.621-.002 2.402-6.166.617.003-2.398 6.165zM88.4 279.873l.75.003-.025 5.688-.75-.004.02-4.382-2.82 4.37-.754-.003.025-5.688.753.004-.019 4.382 2.82-4.37zm5.533 1.485l-.019 4.227-.726-.004.016-3.629-1.438-.006-.093 1.582c-.05.726-.174 1.245-.374 1.557-.196.311-.508.473-.935.484l-.29-.001.003-.637.207-.015c.235-.025.403-.159.506-.404.103-.244.17-.697.201-1.358l.086-1.808 2.856.012zm1.943 1.466l1.097.004c.48.008.858.134 1.135.38.278.246.416.579.414.998-.002.422-.147.76-.434 1.014-.288.254-.674.38-1.158.378l-1.79-.008.02-4.227.722.004-.006 1.457zm-.003.589l-.007 1.59 1.074.005c.271.001.481-.067.63-.204.15-.14.224-.331.225-.574a.785.785 0 00-.216-.575c-.142-.151-.344-.23-.604-.237l-1.102-.005zm9.987 2.224l-.754-.004.022-5.07-2.805-.012-.022 5.07-.75-.003.025-5.688 4.308.019-.024 5.688zm3.863.017c-.042-.084-.075-.233-.1-.446-.337.347-.739.52-1.205.518-.417-.002-.759-.121-1.026-.356a1.152 1.152 0 01-.395-.9c.002-.44.171-.781.505-1.022.337-.243.809-.363 1.416-.361l.703.004.001-.332c.001-.253-.073-.454-.224-.603-.15-.152-.373-.228-.667-.23a1.056 1.056 0 00-.649.193c-.175.129-.263.287-.264.471l-.726-.003a.996.996 0 01.225-.608c.152-.197.356-.353.611-.466.259-.114.541-.17.849-.168.487.002.868.126 1.143.372.275.243.416.578.425 1.006l-.009 1.945c-.001.388.047.697.145.926v.063l-.758-.003zm-1.197-.556c.227 0 .442-.057.645-.173.204-.117.352-.268.444-.456l.003-.867-.566-.002c-.885-.004-1.329.253-1.331.771-.001.227.073.404.224.533.15.128.344.192.581.194zm6.033-3.064l-1.418-.006-.016 3.64-.723-.003.016-3.64-1.39-.006.002-.586 3.531.015-.002.586zm3.44-.571l.723.003-.019 4.227-.722-.003.013-3.082-1.963 3.073-.722-.003.018-4.227.723.004-.014 3.085 1.963-3.077zm1.682 2.082c.002-.414.084-.786.247-1.117.166-.33.394-.584.683-.762.293-.179.625-.267.998-.265.575.002 1.039.203 1.392.603.355.4.531.931.528 1.593v.05a2.51 2.51 0 01-.244 1.109 1.779 1.779 0 01-.679.758 1.856 1.856 0 01-1.009.269c-.573-.002-1.037-.203-1.392-.603-.352-.4-.527-.928-.524-1.585v-.05zm.726.089c-.002.468.105.845.32 1.13.217.285.508.428.873.43.367.001.659-.141.877-.426.217-.288.327-.692.329-1.21.002-.463-.107-.839-.327-1.126a1.043 1.043 0 00-.873-.438 1.041 1.041 0 00-.865.422c-.22.283-.331.689-.334 1.218z"
          fill="#fff"
        />
        <Path
          d="M113 184l-21 23.5 22.5 25.5v16.5h31l18-20L145 210v-26h-32z"
          fill="#E9B843"
          stroke="#fff"
        />
        <Path
          d="M126.437 212.704h.475c.299-.004.533-.083.704-.236.171-.152.257-.359.257-.618 0-.584-.291-.875-.872-.875-.273 0-.492.078-.656.235-.162.155-.243.362-.243.619h-.632c0-.394.143-.721.43-.981.29-.262.657-.393 1.101-.393.469 0 .837.124 1.104.373.267.248.4.593.4 1.035 0 .217-.071.426-.212.629a1.254 1.254 0 01-.571.455c.274.086.484.23.632.43.151.201.226.446.226.735 0 .447-.146.801-.437 1.063-.292.262-.671.393-1.139.393-.467 0-.847-.126-1.141-.379-.292-.253-.438-.587-.438-1.001h.636c0 .262.085.471.256.628.171.158.4.236.687.236.306 0 .539-.08.701-.239.162-.16.243-.389.243-.687 0-.289-.089-.512-.267-.667-.178-.154-.434-.234-.769-.239h-.475v-.516zm3.302.301l.253-2.482h2.55v.585h-2.014l-.15 1.357c.244-.144.521-.215.83-.215.454 0 .814.15 1.081.451.266.298.399.703.399 1.213 0 .513-.139.917-.417 1.213-.275.294-.661.441-1.158.441-.44 0-.799-.122-1.077-.365-.278-.244-.436-.581-.475-1.012h.598c.039.285.14.5.304.646.164.143.381.215.65.215.294 0 .524-.1.69-.301.169-.2.253-.477.253-.83 0-.333-.091-.599-.273-.8-.18-.203-.421-.304-.721-.304-.276 0-.493.06-.65.181l-.167.137-.506-.13zm3.93 0l.253-2.482h2.55v.585h-2.013l-.15 1.357c.243-.144.52-.215.83-.215.454 0 .814.15 1.08.451.267.298.4.703.4 1.213 0 .513-.139.917-.417 1.213-.276.294-.662.441-1.159.441-.439 0-.798-.122-1.076-.365-.278-.244-.437-.581-.475-1.012h.598c.039.285.14.5.304.646.164.143.381.215.649.215.294 0 .525-.1.691-.301.169-.2.253-.477.253-.83 0-.333-.091-.599-.274-.8-.18-.203-.42-.304-.721-.304-.276 0-.492.06-.649.181l-.168.137-.506-.13zM124.633 223.244c-.088.752-.366 1.333-.835 1.743-.466.407-1.086.611-1.86.611-.84 0-1.514-.301-2.022-.904-.505-.602-.757-1.408-.757-2.417v-.683c0-.661.117-1.242.352-1.743a2.638 2.638 0 011.006-1.153c.433-.27.934-.405 1.504-.405.755 0 1.36.212 1.816.635.456.42.721 1.002.796 1.748h-.943c-.081-.567-.258-.977-.532-1.231-.27-.254-.649-.381-1.137-.381-.599 0-1.07.222-1.412.665-.338.442-.507 1.072-.507 1.889v.689c0 .771.161 1.385.483 1.84.322.456.773.684 1.353.684.52 0 .919-.117 1.196-.352.28-.237.465-.649.556-1.235h.943zm3.696-2.217a2.8 2.8 0 00-.444-.034c-.593 0-.995.252-1.206.757v3.75h-.904v-5.283h.879l.015.61c.296-.472.716-.708 1.26-.708.175 0 .309.023.4.069v.839zm3.901 4.473c-.052-.104-.094-.29-.126-.557-.42.437-.922.655-1.504.655-.521 0-.949-.147-1.285-.44a1.439 1.439 0 01-.498-1.123c0-.55.209-.976.625-1.279.42-.306 1.009-.459 1.768-.459h.879v-.415c0-.316-.095-.567-.283-.752-.189-.189-.467-.283-.835-.283-.323 0-.593.081-.811.244-.218.163-.327.36-.327.591h-.908c0-.264.093-.518.278-.762.189-.247.443-.443.762-.586a2.58 2.58 0 011.059-.215c.609 0 1.086.153 1.431.459.345.303.524.721.537 1.255v2.432c0 .485.062.87.186 1.157v.078h-.948zm-1.499-.688c.284 0 .552-.074.806-.22.254-.147.438-.337.552-.571v-1.084h-.708c-1.107 0-1.66.323-1.66.971 0 .283.094.505.283.664.189.16.431.24.727.24zm4.527-.049h3.091v.737h-4.195v-.664l2.915-3.872h-2.871v-.747h4.004v.639l-2.944 3.907zm5.84-.586l1.23-3.96h.967l-2.124 6.098c-.329.879-.851 1.319-1.567 1.319l-.171-.015-.337-.063v-.733l.244.02c.306 0 .543-.062.713-.186.172-.123.314-.35.425-.678l.2-.538-1.885-5.224h.986l1.319 3.96zm-18.409 10.54v2.783h-.937v-7.109h2.622c.778 0 1.387.198 1.826.595.443.397.664.923.664 1.577 0 .691-.216 1.223-.649 1.597-.43.371-1.047.557-1.851.557h-1.675zm0-.767h1.685c.501 0 .885-.117 1.152-.351.267-.238.401-.58.401-1.026 0-.423-.134-.761-.401-1.015-.267-.254-.633-.386-1.098-.396h-1.739v2.788zm8.433 3.55c-.052-.104-.094-.29-.127-.557-.42.437-.921.655-1.504.655-.521 0-.949-.147-1.284-.44a1.439 1.439 0 01-.498-1.123c0-.55.208-.976.625-1.279.42-.306 1.009-.459 1.768-.459h.878v-.415c0-.316-.094-.567-.283-.752-.189-.189-.467-.283-.835-.283-.322 0-.592.081-.81.244-.218.163-.327.36-.327.591h-.909c0-.264.093-.518.279-.762a1.93 1.93 0 01.761-.586 2.588 2.588 0 011.06-.215c.609 0 1.086.153 1.431.459.345.303.524.721.537 1.255v2.432c0 .485.062.87.185 1.157v.078h-.947zm-1.499-.688c.283 0 .552-.074.806-.22.254-.147.438-.337.551-.571v-1.084h-.708c-1.106 0-1.66.323-1.66.971 0 .283.095.505.284.664.188.16.431.24.727.24zm6.231-3.785a2.804 2.804 0 00-.445-.034c-.592 0-.994.252-1.206.757v3.75h-.903v-5.283h.879l.014.61c.297-.472.717-.708 1.26-.708a.92.92 0 01.401.069v.839zm2.309 2.027l-.566.591v1.855h-.904V230h.904v4.536l.483-.581 1.646-1.738h1.098l-2.055 2.207 2.294 3.076h-1.059l-1.841-2.446z"
          fill="#fff"
        />
        <Path
          d="M188.5 162.5H159V223h10.5l19-20v-40.5z"
          fill="#419BDD"
          stroke="#fff"
        />
        <Path
          d="M169.785 169.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm6.492 1.285h.789v.59h-.789v1.32h-.726v-1.32h-2.59v-.426l2.547-3.942h.769v3.778zm-2.496 0h1.77v-2.789l-.086.156-1.684 2.633zm4.989-1.285h.542c.342-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.312 0-.562.09-.75.27-.185.177-.277.412-.277.707h-.723c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.537 0 .957.142 1.262.426.304.284.457.679.457 1.184 0 .247-.081.487-.242.718a1.443 1.443 0 01-.653.52c.313.099.554.263.723.492.172.229.258.509.258.84 0 .51-.167.915-.5 1.215-.334.299-.767.449-1.301.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.727c0 .299.098.539.293.719.195.179.457.269.785.269.349 0 .616-.091.801-.273.185-.182.277-.444.277-.785 0-.331-.101-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.542v-.59z"
          fill="#fff"
        />
        <Path
          d="M202 162.5h-13.5V203l13.5-14.821V162.5z"
          fill="#AB64A6"
          stroke="#fff"
        />
        <Path
          d="M194.305 182.215v-.543c-.006-.341-.095-.61-.27-.805-.174-.195-.41-.293-.707-.293-.667 0-1 .332-1 .996 0 .313.09.563.27.75.177.185.412.278.707.278v.722c-.451 0-.825-.164-1.121-.492-.3-.331-.45-.75-.45-1.258 0-.536.142-.957.426-1.261.284-.305.679-.457 1.184-.457.247 0 .487.08.718.242.232.159.405.376.52.652.099-.312.263-.553.492-.723.229-.171.509-.257.84-.257.51 0 .915.166 1.215.5.299.333.449.767.449 1.3 0 .534-.144.969-.433 1.305-.29.333-.671.5-1.145.5v-.726c.299 0 .539-.098.719-.293.179-.196.269-.457.269-.786 0-.349-.091-.615-.273-.8-.182-.185-.444-.278-.785-.278-.331 0-.585.102-.762.305-.177.203-.268.496-.273.879v.543h-.59zm1.285-6.492v-.789h.59v.789h1.32v.726h-1.32v2.59h-.426l-3.942-2.547v-.769h3.778zm0 2.496v-1.77h-2.789l.156.086 2.633 1.684zm0-6.989v-.789h.59v.789h1.32v.727h-1.32v2.59h-.426L191.812 172v-.77h3.778zm0 2.497v-1.77h-2.789l.156.086 2.633 1.684z"
          fill="#fff"
        />
        <Path
          d="M215.5 162.5H202v25h17.5v-13h-4v-12z"
          fill="#C74D84"
          stroke="#fff"
        />
        <Path
          d="M205.785 179.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm6.492 1.285h.789v.59h-.789v1.32h-.726v-1.32h-2.59v-.426l2.547-3.942h.769v3.778zm-2.496 0h1.77v-2.789l-.086.156-1.684 2.633zm4.27-.942l.289-2.836h2.914v.668h-2.301l-.172 1.551c.279-.164.595-.246.949-.246.519 0 .93.172 1.235.516.305.341.457.803.457 1.387 0 .585-.159 1.048-.477 1.386-.315.336-.756.504-1.324.504-.503 0-.913-.139-1.23-.418-.318-.278-.499-.664-.543-1.156h.683c.045.325.16.572.348.738.187.164.435.246.742.246.336 0 .599-.114.789-.343.193-.23.289-.546.289-.95 0-.38-.104-.685-.312-.914-.206-.232-.481-.347-.825-.347-.315 0-.562.069-.742.207l-.191.156-.578-.149z"
          fill="#fff"
        />
        <Path
          d="M280.5 178.5c-10-7.2-28.5-12.5-36.5-14V191h-13v29h21l28.5-31v-10.5z"
          fill="#419BDD"
          stroke="#fff"
        />
        <Path
          d="M259.202 177.063h-1.6v4.437h-.653v-4.437h-1.596v-.54h3.849v.54zm4.317 3.784a1.529 1.529 0 01-.708.544 2.875 2.875 0 01-1.053.177c-.405 0-.765-.094-1.08-.283a1.929 1.929 0 01-.731-.814 2.808 2.808 0 01-.263-1.22v-.434c0-.75.174-1.331.523-1.743.35-.413.843-.619 1.476-.619.52 0 .938.133 1.255.4.316.264.51.64.581 1.128h-.657c-.123-.659-.515-.988-1.175-.988-.44 0-.774.155-1.002.465-.226.308-.339.754-.342 1.34v.407c0 .558.128 1.002.383 1.333.255.328.6.492 1.036.492.246 0 .461-.028.646-.082.184-.055.337-.147.458-.277v-1.118h-1.152v-.533h1.805v1.825zm1.801.653h-.656v-4.977h.656v4.977zm3.948-2.198h-2.089v2.198h-.656v-4.977h3.083v.54h-2.427v1.703h2.089v.536zm-18.314 8.39c0 .563-.129 1.016-.386 1.36a1.239 1.239 0 01-1.046.516c-.449 0-.802-.142-1.06-.427v1.781h-.632v-5.12h.578l.03.41c.258-.319.616-.479 1.074-.479.444 0 .795.168 1.052.503.26.335.39.801.39 1.398v.058zm-.632-.072c0-.417-.089-.746-.267-.988a.86.86 0 00-.731-.362c-.383 0-.67.17-.862.509v1.767c.19.338.479.506.869.506a.85.85 0 00.721-.359c.18-.241.27-.599.27-1.073zm2.973 1.948c-.501 0-.909-.164-1.223-.492-.315-.33-.472-.771-.472-1.323v-.116c0-.367.07-.694.209-.981.141-.289.337-.515.587-.677.253-.164.527-.246.821-.246.481 0 .854.159 1.121.475.266.317.4.771.4 1.361v.263h-2.506c.01.365.115.66.318.885.205.224.465.335.78.335.223 0 .412-.045.567-.136a1.43 1.43 0 00.407-.363l.386.301c-.31.476-.775.714-1.395.714zm-.078-3.315a.841.841 0 00-.643.28c-.173.185-.28.445-.321.779h1.852v-.047c-.018-.322-.104-.57-.259-.745-.155-.178-.365-.267-.629-.267zm3.739 2.799a.906.906 0 00.591-.205.723.723 0 00.281-.513h.598a1.155 1.155 0 01-.219.605 1.417 1.417 0 01-.54.458 1.54 1.54 0 01-.711.171c-.504 0-.905-.167-1.203-.502-.296-.337-.444-.798-.444-1.381v-.106c0-.36.066-.68.198-.96a1.51 1.51 0 01.567-.653c.249-.155.541-.233.879-.233.414 0 .758.125 1.032.373.276.248.423.571.441.967h-.598a.867.867 0 00-.875-.82c-.322 0-.571.116-.749.349-.175.23-.263.564-.263 1.001v.12c0 .426.088.754.263.984.176.23.426.345.752.345zm4.929-2.738h-1.241v3.186h-.632v-3.186h-1.217v-.512h3.09v.512zm.304 1.303c0-.363.071-.688.212-.978.143-.289.342-.513.595-.67.255-.157.545-.236.871-.236.504 0 .911.175 1.22.523.313.349.469.813.469 1.391v.045c0 .36-.07.683-.209.971a1.562 1.562 0 01-.591.666c-.255.16-.549.239-.882.239-.501 0-.908-.174-1.22-.523-.31-.348-.465-.81-.465-1.384v-.044zm.636.075c0 .41.094.739.283.988a.92.92 0 00.766.372.91.91 0 00.766-.376c.189-.253.283-.606.283-1.059 0-.406-.097-.734-.29-.985a.913.913 0 00-.766-.379.907.907 0 00-.755.372c-.192.249-.287.604-.287 1.067zm6.648 0c0 .563-.129 1.016-.387 1.36a1.237 1.237 0 01-1.045.516c-.449 0-.803-.142-1.06-.427v1.781h-.632v-5.12h.577l.031.41c.258-.319.615-.479 1.073-.479.445 0 .796.168 1.053.503.26.335.39.801.39 1.398v.058zm-.633-.072c0-.417-.089-.746-.266-.988a.861.861 0 00-.732-.362c-.383 0-.67.17-.861.509v1.767c.189.338.478.506.868.506a.849.849 0 00.721-.359c.18-.241.27-.599.27-1.073zm3.722 1.88a1.326 1.326 0 01-.088-.39 1.409 1.409 0 01-1.053.458c-.365 0-.664-.102-.899-.307a1.011 1.011 0 01-.349-.786c0-.385.146-.684.438-.896.294-.214.706-.321 1.237-.321h.615v-.291c0-.221-.066-.396-.198-.526-.132-.132-.327-.198-.584-.198a.923.923 0 00-.568.171c-.152.114-.229.251-.229.413h-.635a.87.87 0 01.194-.533c.133-.173.31-.31.534-.41.225-.1.472-.151.741-.151.426 0 .76.107 1.002.322.241.212.367.504.376.878v1.702c0 .34.043.61.13.81v.055h-.664zm-1.049-.482c.198 0 .386-.051.564-.154a.922.922 0 00.386-.4v-.758h-.495c-.775 0-1.162.226-1.162.68 0 .198.066.353.198.465a.765.765 0 00.509.167zm5.595.482h-.632v-1.579h-1.699v1.579h-.635v-3.698h.635v1.603h1.699v-1.603h.632v3.698z"
          fill="#fff"
        />
        <Path d="M231 191h-11.5v29H231v-29z" fill="#933F39" stroke="#fff" />
        <Path
          d="M221.741 205.503h.339c.213-.003.381-.059.503-.169a.562.562 0 00.183-.441c0-.417-.207-.625-.622-.625a.65.65 0 00-.469.168.583.583 0 00-.174.442h-.451c0-.282.102-.515.307-.701.207-.187.469-.281.787-.281.335 0 .598.089.788.267.191.177.286.424.286.739a.778.778 0 01-.152.45.898.898 0 01-.407.324.866.866 0 01.451.308.845.845 0 01.161.525c0 .319-.104.572-.312.759-.208.187-.479.281-.813.281-.334 0-.605-.091-.815-.271a.9.9 0 01-.313-.716h.454c0 .188.061.337.183.45.122.112.286.168.491.168.218 0 .385-.057.5-.171.116-.114.174-.277.174-.49 0-.207-.064-.366-.191-.477-.127-.11-.31-.167-.549-.17h-.339v-.369zm2.358.215l.181-1.773h1.821v.418h-1.438l-.107.969c.174-.103.372-.154.593-.154.324 0 .581.108.771.322.191.214.286.503.286.867 0 .366-.099.655-.298.867-.197.21-.473.315-.827.315-.315 0-.571-.087-.769-.261-.199-.175-.312-.415-.34-.723h.427c.028.203.101.357.218.461a.677.677 0 00.464.154c.21 0 .374-.071.493-.215.12-.143.18-.341.18-.593 0-.238-.065-.428-.195-.571a.653.653 0 00-.515-.218c-.197 0-.352.044-.464.13l-.12.098-.361-.093zm4.085 1.782h-.455v-3.01l-.91.334v-.41l1.294-.486h.071v3.572z"
          fill="#fff"
        />
        <Path
          d="M203.5 190l-14 15.5L202 220h14.5v-30h-13z"
          fill="#933F39"
          stroke="#fff"
        />
        <Path
          d="M200.785 204.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm3.774.343l.289-2.836h2.914v.668h-2.301l-.172 1.551c.279-.164.595-.246.949-.246.519 0 .93.172 1.235.516.304.341.457.803.457 1.387 0 .585-.159 1.048-.477 1.386-.315.336-.756.504-1.324.504-.503 0-.913-.139-1.231-.418-.317-.278-.498-.664-.543-1.156h.684c.044.325.16.572.348.738.187.164.435.246.742.246.336 0 .599-.114.789-.343.193-.23.289-.546.289-.95 0-.38-.104-.685-.312-.914-.206-.232-.481-.347-.825-.347-.315 0-.562.069-.742.207l-.191.156-.578-.149zm7.726.426c0 .847-.144 1.475-.433 1.887-.29.411-.741.617-1.356.617-.607 0-1.056-.2-1.348-.601-.291-.404-.442-1.006-.453-1.805v-.965c0-.836.145-1.457.434-1.863.289-.406.742-.61 1.359-.61.612 0 1.063.197 1.352.59.289.391.437.995.445 1.813v.937zm-.723-.988c0-.612-.085-1.057-.257-1.336-.172-.281-.444-.422-.817-.422-.37 0-.639.139-.808.418-.17.279-.257.707-.262 1.285v1.157c0 .614.089 1.069.266 1.363.179.291.45.437.812.437.357 0 .621-.138.793-.414.175-.276.266-.711.273-1.304v-1.184z"
          fill="#fff"
        />
        <Path
          d="M335.5 319.5H307l-18.5 20h34c3-5.5 7.5-10.5 13-13.5v-6.5z"
          fill="#83A164"
          stroke="#fff"
        />
        <Path
          d="M308.785 328.305h.543c.341-.006.61-.095.805-.27.195-.174.293-.41.293-.707 0-.667-.332-1-.996-1-.313 0-.563.09-.75.27-.185.177-.278.412-.278.707h-.722c0-.451.164-.825.492-1.121.331-.3.75-.45 1.258-.45.536 0 .957.142 1.261.426.305.284.457.679.457 1.184 0 .247-.08.487-.242.718a1.44 1.44 0 01-.652.52c.312.099.553.263.723.492.171.229.257.509.257.84 0 .51-.166.915-.5 1.215-.333.299-.767.449-1.3.449-.534 0-.969-.144-1.305-.433-.333-.29-.5-.671-.5-1.145h.726c0 .299.098.539.293.719.196.179.457.269.786.269.349 0 .615-.091.8-.273.185-.182.278-.444.278-.785 0-.331-.102-.585-.305-.762-.203-.177-.496-.268-.879-.273h-.543v-.59zm6.277-2.496v.613h-.132c-.563.01-1.011.177-1.344.5-.333.323-.526.777-.578 1.363.299-.344.708-.515 1.226-.515.495 0 .89.174 1.184.523.297.349.445.799.445 1.352 0 .585-.16 1.054-.48 1.406-.318.351-.745.527-1.281.527-.545 0-.986-.208-1.325-.625-.338-.419-.507-.958-.507-1.617v-.277c0-1.047.222-1.847.668-2.399.447-.555 1.113-.838 1.996-.851h.128zm-.949 2.562c-.247 0-.475.074-.683.223a1.155 1.155 0 00-.434.558v.266c0 .469.106.846.316 1.133.211.286.474.429.79.429.325 0 .58-.119.765-.359.188-.239.281-.553.281-.941 0-.391-.095-.706-.285-.946a.9.9 0 00-.75-.363zm6.172.703c0 .847-.144 1.475-.433 1.887-.29.411-.741.617-1.356.617-.607 0-1.056-.2-1.348-.601-.291-.404-.442-1.006-.453-1.805v-.965c0-.836.145-1.457.434-1.863.289-.406.742-.61 1.359-.61.612 0 1.063.197 1.352.59.289.391.437.995.445 1.813v.937zm-.723-.988c0-.612-.085-1.057-.257-1.336-.172-.281-.444-.422-.817-.422-.37 0-.639.139-.808.418-.17.279-.257.707-.262 1.285v1.157c0 .614.089 1.069.266 1.363.179.291.45.437.812.437.357 0 .621-.138.793-.414.175-.276.266-.711.273-1.304v-1.184z"
          fill="#fff"
        />
        <Path
          d="M284 236l-9.5-10.5-9 9L275 245l9-9z"
          fill="#4777C2"
          stroke="#fff"
        />
        <Path
          d="M271.421 235.903h-.432v1.597h-.468v-3.555h.468v1.568h.366l1.243-1.568h.584l-1.358 1.724 1.458 1.831h-.574l-1.287-1.597zm3.658 1.597h-.454v-3.01l-.911.334v-.41l1.294-.486h.071v3.572zm3.618-3.301l-1.472 3.301h-.474l1.467-3.184h-1.924v-.371h2.403v.254z"
          fill="#fff"
        />
        <Path
          d="M320 198l-9.5-10.5-9 9L311 207l9-9z"
          fill="#4777C2"
          stroke="#fff"
        />
        <Path
          d="M307.421 197.903h-.432v1.597h-.468v-3.555h.468v1.568h.366l1.243-1.568h.584l-1.358 1.724 1.458 1.831h-.574l-1.287-1.597zm3.658 1.597h-.454v-3.01l-.911.334v-.41l1.294-.486h.071v3.572zm3.479-2.627a.827.827 0 01-.142.474.95.95 0 01-.378.324c.185.08.332.197.439.35a.874.874 0 01.164.52c0 .307-.105.552-.313.734-.207.183-.479.274-.818.274-.342 0-.616-.091-.822-.274-.206-.184-.308-.428-.308-.734 0-.193.052-.366.156-.52a.992.992 0 01.437-.352.923.923 0 01-.373-.325.829.829 0 01-.137-.471c0-.299.096-.537.288-.713.192-.176.445-.264.759-.264.313 0 .565.088.757.264.194.176.291.414.291.713zm-.369 1.658a.655.655 0 00-.19-.486.67.67 0 00-.494-.188.664.664 0 00-.49.185.667.667 0 00-.183.489c0 .202.059.36.178.476.12.115.287.173.5.173.212 0 .378-.058.498-.173a.632.632 0 00.181-.476zm-.679-2.263a.584.584 0 00-.432.166.603.603 0 00-.163.446c0 .181.053.328.161.44a.581.581 0 00.434.166.572.572 0 00.432-.166.605.605 0 00.164-.44.605.605 0 00-.168-.442.58.58 0 00-.428-.17z"
          fill="#fff"
        />
        <Path d="M358 265h-17v14h17v-14z" fill="#747D4A" stroke="#fff" />
        <Path
          d="M346.421 271.903h-.432v1.597h-.468v-3.555h.468v1.568h.366l1.243-1.568h.584l-1.358 1.724 1.458 1.831h-.574l-1.287-1.597zm3.658 1.597h-.454v-3.01l-.911.334v-.41l1.294-.486h.071v3.572zm1.53-1.782l.181-1.773h1.821v.418h-1.438l-.107.969c.174-.103.372-.154.593-.154.324 0 .581.108.772.322.19.214.285.503.285.867 0 .366-.099.655-.298.867-.196.21-.472.315-.827.315-.314 0-.571-.087-.769-.261-.199-.175-.312-.415-.34-.723h.428c.027.203.1.357.217.461a.677.677 0 00.464.154c.21 0 .374-.071.493-.215.12-.143.181-.341.181-.593 0-.238-.065-.428-.196-.571a.653.653 0 00-.515-.218c-.197 0-.351.044-.464.13l-.119.098-.362-.093z"
          fill="#fff"
        />
        <Path
          d="M245 304l-11.5 12.5 6 6L251 310l-6-6z"
          fill="#933F39"
          stroke="#fff"
        />
        <Path
          d="M240.2 315.425l-.367.366 1.355 1.355-.397.398-3.017-3.016.398-.398 1.33 1.33.311-.311-.276-2.384.495-.495.311 2.614 2.791.317-.487.487-2.447-.263zm4.458-1.749l-.385.386-2.554-2.555-.489 1.057-.348-.348.685-1.51.06-.06 3.031 3.03zm.723-5.181a.983.983 0 01.282.522c.039.196.023.395-.046.597a1.22 1.22 0 01.67-.077c.222.038.415.138.58.303.261.261.38.557.358.888-.021.33-.175.639-.462.926-.29.29-.6.446-.93.467-.33.017-.625-.103-.885-.363a1.084 1.084 0 01-.308-.574 1.178 1.178 0 01.072-.669c-.2.068-.398.082-.592.041a1.003 1.003 0 01-.516-.283c-.254-.254-.374-.538-.361-.85.014-.312.154-.601.421-.868.265-.265.554-.404.866-.418.313-.015.597.104.851.358zm1.094 1.72a.783.783 0 00-.574-.251.8.8 0 00-.578.259c-.172.173-.259.364-.259.574a.8.8 0 00.259.569c.171.172.357.256.555.253.201-.004.391-.096.572-.277.18-.18.272-.37.276-.57.002-.202-.081-.387-.251-.557zm-2.496-1.345a.701.701 0 00-.226.508c0 .185.08.357.24.518a.733.733 0 00.51.236.7.7 0 00.509-.228.687.687 0 00.226-.508.722.722 0 00-.234-.511.719.719 0 00-.518-.232.686.686 0 00-.507.217z"
          fill="#fff"
        />
        <Path
          d="M102 240l-10-11 10-10 9.5 11-9.5 10z"
          fill="#5F6197"
          stroke="#fff"
        />
        <Path
          d="M98.306 229.584h-.519v1.916h-.562v-4.266h.562v1.881h.44l1.49-1.881h.701l-1.629 2.069 1.749 2.197h-.688l-1.544-1.916zm5.402 1.916h-2.795v-.39l1.477-1.64c.218-.248.369-.449.451-.604.084-.156.126-.317.126-.483a.77.77 0 00-.202-.548.707.707 0 00-.539-.214c-.27 0-.48.077-.63.232-.149.152-.223.365-.223.638h-.542c0-.392.126-.71.378-.952.254-.242.593-.363 1.017-.363.396 0 .71.104.94.313.23.207.346.484.346.829 0 .42-.268.92-.803 1.5l-1.143 1.24h2.142v.442zm3.249-1.819c0 .634-.108 1.106-.325 1.415-.217.308-.556.463-1.017.463-.455 0-.792-.151-1.011-.452-.218-.302-.332-.753-.339-1.353v-.724c0-.627.108-1.092.325-1.397.217-.305.556-.457 1.019-.457.459 0 .797.147 1.014.442.217.293.328.746.334 1.36v.703zm-.542-.742c0-.459-.064-.793-.193-1.001-.129-.211-.333-.317-.613-.317-.277 0-.479.105-.606.314-.127.209-.192.53-.196.963v.868c0 .461.066.801.199 1.022.135.219.338.328.609.328.268 0 .466-.103.595-.31.131-.207.199-.534.205-.979v-.888z"
          fill="#fff"
        />
        <Path d="M102.5 188.5v-12h-16v12h16z" fill="#83A164" stroke="#fff" />
        <Path
          d="M91.421 182.903h-.432v1.597h-.469v-3.555h.47v1.568h.366l1.242-1.568h.584l-1.358 1.724 1.458 1.831h-.574l-1.287-1.597zm4.502 1.597h-2.329v-.325l1.23-1.367a2.89 2.89 0 00.377-.503.839.839 0 00.105-.403.638.638 0 00-.169-.456.588.588 0 00-.449-.178c-.225 0-.4.064-.525.192-.124.127-.185.305-.185.533h-.452c0-.327.105-.592.315-.794.211-.202.494-.303.847-.303.33 0 .592.088.784.262.192.172.288.403.288.691 0 .35-.223.766-.67 1.25l-.951 1.032h1.784v.369zm1.963 0h-.454v-3.01l-.91.334v-.41l1.293-.486h.071v3.572z"
          fill="#fff"
        />
        <Path d="M102.5 176.5v-13h-16v13h16z" fill="#E9B843" stroke="#fff" />
        <Path
          d="M91.421 170.903h-.432v1.597h-.469v-3.555h.47v1.568h.366l1.242-1.568h.584l-1.358 1.724 1.458 1.831h-.574l-1.287-1.597zm4.502 1.597h-2.329v-.325l1.23-1.367a2.89 2.89 0 00.377-.503.839.839 0 00.105-.403.638.638 0 00-.169-.456.588.588 0 00-.449-.178c-.225 0-.4.064-.525.192-.124.127-.185.305-.185.533h-.452c0-.327.105-.592.315-.794.211-.202.494-.303.847-.303.33 0 .592.088.784.262.192.172.288.403.288.691 0 .35-.223.766-.67 1.25l-.951 1.032h1.784v.369zm1.963 0h-.454v-3.01l-.91.334v-.41l1.293-.486h.071v3.572z"
          fill="#fff"
        />
        <Path d="M84.5 157.5v-14h-17v14h17z" fill="#D48477" stroke="#fff" />
        <Path
          d="M72.421 150.903h-.432v1.597h-.469v-3.555h.47v1.568h.366l1.242-1.568h.584l-1.358 1.724 1.458 1.831h-.574l-1.287-1.597zm4.502 1.597h-2.329v-.325l1.23-1.367a2.89 2.89 0 00.377-.503.839.839 0 00.105-.403.638.638 0 00-.169-.456.588.588 0 00-.449-.178c-.225 0-.4.064-.525.192-.124.127-.185.305-.185.533h-.452c0-.327.105-.592.315-.794.211-.202.494-.303.847-.303.33 0 .592.088.784.262.192.172.288.403.288.691 0 .35-.223.766-.67 1.25l-.951 1.032h1.784v.369zm1.136-1.997h.339c.213-.003.38-.059.503-.169a.562.562 0 00.183-.441c0-.417-.208-.625-.623-.625a.65.65 0 00-.468.168.584.584 0 00-.174.442h-.451c0-.282.102-.515.307-.701.207-.187.469-.281.786-.281.336 0 .599.089.789.267.19.177.286.424.286.739 0 .155-.05.305-.152.45a.9.9 0 01-.407.324.87.87 0 01.451.308.85.85 0 01.161.525c0 .319-.104.572-.312.759-.209.187-.48.281-.813.281-.334 0-.606-.091-.816-.271a.901.901 0 01-.312-.716h.454c0 .188.061.337.183.45.122.112.286.168.49.168.219 0 .386-.057.501-.171.116-.114.174-.277.174-.49 0-.207-.064-.366-.19-.477-.128-.11-.31-.167-.55-.17h-.34v-.369z"
          fill="#fff"
        />
        <Path d="M162.5 255h-8v10.5h8V255z" fill="#933F39" stroke="#fff" />
        <Path
          d="M156.037 260.223h-.346v1.277h-.375v-2.844h.375v1.254h.293l.995-1.254h.466l-1.086 1.379 1.166 1.465h-.459l-1.029-1.277zm2.926 1.277h-.363v-2.408l-.729.267v-.328l1.035-.388h.057v2.857zm2.443-1.25a.88.88 0 01-.271.217.737.737 0 01-.344.082.77.77 0 01-.43-.121.79.79 0 01-.281-.34 1.173 1.173 0 01-.1-.486c0-.191.036-.362.108-.514a.811.811 0 01.308-.35.885.885 0 01.465-.121.79.79 0 01.664.317c.163.209.245.496.245.859v.105c0 .554-.11.958-.329 1.213-.218.254-.548.384-.99.391h-.07v-.305h.076c.298-.005.527-.082.688-.232.16-.151.247-.389.261-.715zm-.556 0a.556.556 0 00.334-.111.662.662 0 00.224-.276v-.144c0-.237-.051-.43-.154-.578-.103-.149-.233-.223-.391-.223a.463.463 0 00-.383.184.75.75 0 00-.144.48c0 .194.046.354.139.48a.442.442 0 00.375.188z"
          fill="#fff"
        />
        <Path
          d="M304 215c0 4.418-8 14-8 14s-8-9.582-8-14a8 8 0 0116 0z"
          fill="red"
        />
        <Circle cx={296} cy={215} fill="#A50000" r={4} />
        <Path
          d="M289.035 205v-2.844h.996c.345 0 .607.067.785.199.179.132.268.325.268.581a.652.652 0 01-.107.369.627.627 0 01-.299.232c.146.037.26.11.343.221.085.11.127.246.127.406 0 .274-.087.481-.261.621-.175.141-.423.212-.746.215h-1.106zm.586-1.238v.767h.502a.484.484 0 00.322-.097.342.342 0 00.117-.274c0-.26-.134-.392-.404-.396h-.537zm0-.414h.434c.295-.006.443-.123.443-.354 0-.129-.038-.221-.113-.277-.074-.057-.192-.086-.354-.086h-.41v.717zm2.565-.166h.457c.334 0 .599.081.795.244a.802.802 0 01.294.654.833.833 0 01-.293.666c-.194.167-.452.251-.775.254h-1.068v-2.844h.59v1.026zm2.376 1.818h-.585v-2.844h.585V205zm-2.376-1.346v.875h.466c.15 0 .269-.041.358-.123a.425.425 0 00.135-.33.383.383 0 00-.129-.305.528.528 0 00-.35-.117h-.48zm5.912-1.023h-.871V205h-.586v-2.369h-.86v-.475h2.317v.475zm1.402.869l.518-1.344h.632l-.994 2.346-.08.154a.727.727 0 01-.676.385l-.205-.008-.006-.471a.941.941 0 00.153.008.386.386 0 00.197-.043.317.317 0 00.127-.158l.072-.185-.998-2.028h.631l.629 1.344zm3.637-.869h-.871V205h-.586v-2.369h-.86v-.475h2.317v.475z"
          fill="red"
        />
      </G>
    </Svg>
  );
}

export default SvgMap;
