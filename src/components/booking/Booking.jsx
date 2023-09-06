import React from 'react'
import './style.css'

const Booking = () => {
	return (
		<aside id="detailForm" className="form doubleMargin" data-scroll-section>
			<div className="mainContainer relative">
				<div className="mainBackground bMarrone"></div>
				<div className="formLayer">
					<h2 id="formTitle" className="slidingTitle" data-scroll data-scroll-repeat>
						<span className="slidingTitleSmall block top_single has_transition_1500 uppercase">get your me time</span>
						<span className="slidingTitleBig block no_overflow cWhite">
							<span className="top_hidden inline_block has_transition_2000 uppercase d100">B</span>
							<span className="top_hidden inline_block has_transition_2000 uppercase d200">O</span>
							<span className="top_hidden inline_block has_transition_2000 uppercase d300">O</span>
							<span className="top_hidden inline_block has_transition_2000 uppercase d400">K</span>
							<span className="top_hidden inline_block has_transition_2000 uppercase d500">E</span>
							<span className="top_hidden inline_block has_transition_2000 uppercase d600">D</span>
						</span>
					</h2>
					<div className="formContent margin">
						<div className="formInfo left">
							<div className="formDescription text cWhite">
								<p>To book a massage, a beauty treatment or a fitness lesson please fill in this form. You will receive an email confirming that your request is being handled by our Concierge Team.</p>
							</div>
						</div>
						{/* <div className="formContainer right" data-disabled='true'>
							<div className="wpforms-container form" id="wpforms-3218">
							<form id="wpforms-form-3218" className="wpforms-validate wpforms-form wpforms-ajax-form" data-formid="3218" method="post" enctype="multipart/form-data" action="https://www.casangelina.com/guest-services/wellbeing/" data-token="dcf4ccf87c23420152b0645467552e8e">
							<noscript className="wpforms-error-noscript">Please enable JavaScript in your browser to complete this form.</noscript><div className="wpforms-field-container"><div id="wpforms-3218-field_1-container" className="wpforms-field wpforms-field-text formField half" data-field-id="1">
							<label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_1">Name <span className="wpforms-required-label">*</span></label><input type="text" id="wpforms-3218-field_1" className="wpforms-field-large wpforms-field-required" name="wpforms[fields][1]" placeholder="name*" required></div><div id="wpforms-3218-field_24-container" className="wpforms-field wpforms-field-text formField half" data-field-id="24"><label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_24">Surname <span className="wpforms-required-label">*</span></label><input type="text" id="wpforms-3218-field_24" className="wpforms-field-large wpforms-field-required" name="wpforms[fields][24]" placeholder="surname*" required></div><div id="wpforms-3218-field_3-container" className="wpforms-field wpforms-field-email formField half" data-field-id="3"><label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_3">Email <span className="wpforms-required-label">*</span></label><input type="email" id="wpforms-3218-field_3" className="wpforms-field-medium wpforms-field-required" name="wpforms[fields][3]" placeholder="email*" required></div><div id="wpforms-3218-field_26-container" className="wpforms-field wpforms-field-number formField half" data-field-id="26"><label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_26">Room Number</label><input type="number" pattern="\d*" id="wpforms-3218-field_26" className="wpforms-field-medium" name="wpforms[fields][26]" placeholder="room number" ></div><div id="wpforms-3218-field_27-container" className="wpforms-field wpforms-field-checkbox formField multiple" data-field-id="27"><label className="wpforms-field-label" for="wpforms-3218-field_27">reservation for</label><ul id="wpforms-3218-field_27"><li className="choice-1 depth-1"><input type="checkbox" id="wpforms-3218-field_27_1" name="wpforms[fields][27][]" value="massage"  ><label className="wpforms-field-label-inline" for="wpforms-3218-field_27_1">massage</label></li><li className="choice-2 depth-1"><input type="checkbox" id="wpforms-3218-field_27_2" name="wpforms[fields][27][]" value="beauty treatment"  ><label className="wpforms-field-label-inline" for="wpforms-3218-field_27_2">beauty treatment</label></li><li className="choice-3 depth-1"><input type="checkbox" id="wpforms-3218-field_27_3" name="wpforms[fields][27][]" value="fitness room"  ><label className="wpforms-field-label-inline" for="wpforms-3218-field_27_3">fitness room</label></li><li className="choice-4 depth-1"><input type="checkbox" id="wpforms-3218-field_27_4" name="wpforms[fields][27][]" value="other"  ><label className="wpforms-field-label-inline" for="wpforms-3218-field_27_4">other</label></li></ul></div><div id="wpforms-3218-field_13-container" className="wpforms-field wpforms-field-textarea formField right" data-field-id="13"><label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_13">Message <span className="wpforms-required-label">*</span></label><textarea id="wpforms-3218-field_13" className="wpforms-field-medium wpforms-field-required" name="wpforms[fields][13]" placeholder="comments" required></textarea></div><div id="wpforms-3218-field_9-container" className="wpforms-field wpforms-field-date-time formField half" data-field-id="9"><label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_9">Date <span className="wpforms-required-label">*</span></label><div className="wpforms-datepicker-wrap"><input type="text" id="wpforms-3218-field_9" className="wpforms-field-date-time-date wpforms-datepicker wpforms-field-required wpforms-field-medium" data-date-format="m/d/Y" data-disable-past-dates="0" data-input="true" name="wpforms[fields][9][date]" placeholder="date*" required><a title="Clear Date" data-clear className="wpforms-datepicker-clear" style="display:none;"></a></div></div><div id="wpforms-3218-field_17-container" className="wpforms-field wpforms-field-date-time formField half" data-field-id="17"><label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_17">Time <span className="wpforms-required-label">*</span></label><input type="text" id="wpforms-3218-field_17-time" className="wpforms-field-date-time-time wpforms-timepicker wpforms-field-required wpforms-field-medium" data-rule-time24h="true" data-time-format="H:i" data-step="30" data-min-time="19:00" data-max-time="22:00" name="wpforms[fields][17][time]" placeholder="time*" required></div><div id="wpforms-3218-field_21-container" className="wpforms-field wpforms-field-gdpr-checkbox formField wpforms-field-checkbox" data-field-id="21"><label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_21">Privacy Policy <span className="wpforms-required-label">*</span></label><ul id="wpforms-3218-field_21" className="wpforms-field-required"><li className="choice-1"><input type="checkbox" id="wpforms-3218-field_21_1" name="wpforms[fields][21][]" value="I agree to the use of my personal data for the purpose stated above." required ><label className="wpforms-field-label-inline" for="wpforms-3218-field_21_1">I agree to the use of my personal data for the purpose stated above. <span className="wpforms-required-label">*</span></label></li></ul></div><div id="wpforms-3218-field_23-container" className="wpforms-field wpforms-field-checkbox formField noMargin" data-field-id="23"><label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_23">Caselle di Spunta</label><ul id="wpforms-3218-field_23"><li className="choice-1 depth-1"><input type="checkbox" id="wpforms-3218-field_23_1" name="wpforms[fields][23][]" value="I agree to the use of my personal data to receive news and offers according to my preferences."  ><label className="wpforms-field-label-inline" for="wpforms-3218-field_23_1">I agree to the use of my personal data to receive news and offers according to my preferences.</label></li></ul><div className="wpforms-field-description wpforms-disclaimer-description">The personal data provided by filling this form will be processed, mainly in a digital manner, to provide feedback on the information requested. The submission of data is free but leaving mandatory fields empty will inhibits sending the request. The other fields are optional and allow the company to contact you more quickly, to provide a more accurate answer and to elaborate anonymous statistics about their customers and/or potential customers. The data provided will not be disclosed to third parties or spread in any way. Regarding the processing of data, pursuant to art. 7 of Legislative Decree no. 196 of Italian Costitution, you have the right to obtain confirmation of the existence of personal data concerning you, their origin and the logic on which the treatment is based; to obtain cancellation, transformation into anonymous form or block if processed in violation of law; to get update, rectification or integration. To exercise your rights, please contact DIKETO CASANGELINA SRL, Via G Porzio Is E/7, 80143 Napoli.</div></div></div><div className="wpforms-submit-container" ><input type="hidden" name="wpforms[id]" value="3218"><input type="hidden" name="wpforms[author]" value="1"><input type="hidden" name="wpforms[post_id]" value="1541"><button type="submit" name="wpforms[submit]" className="wpforms-submit oButton bordered" id="wpforms-submit-3218" value="wpforms-submit" aria-live="assertive" data-alt-text="sending..." data-submit-text="send">send</button><img src="../../wp-content/plugins/wpforms/assets/images/submit-spin.svg" className="wpforms-submit-spinner" style="display: none;" width="26" height="26" alt="" /></div></form></div>

							</div> */}
							<div className="formContainer right" data-disabled='true'>
								<div className="wpforms-container form" id="wpforms-3218">
									<form id="wpforms-form-3218" className="wpforms-validate wpforms-form wpforms-ajax-form">
										<div className="wpforms-field-container">
											<div id="wpforms-3218-field_1-container" className="wpforms-field wpforms-field-text formField half" data-field-id="1">
											<label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_1">Name <span className="wpforms-required-label">*</span></label>
											<input type="text" id="wpforms-3218-field_1" className="wpforms-field-large wpforms-field-required" name="wpforms[fields][1]" placeholder="name*" required /></div>
											<div id="wpforms-3218-field_24-container" className="wpforms-field wpforms-field-text formField half" data-field-id="24">
											<label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_24">Surname <span className="wpforms-required-label">*</span></label>
											<input type="text" id="wpforms-3218-field_24" className="wpforms-field-large wpforms-field-required" name="wpforms[fields][24]" placeholder="surname*" required /></div>
											<div id="wpforms-3218-field_3-container" className="wpforms-field wpforms-field-email formField half" data-field-id="3">
											<label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_3">Email <span className="wpforms-required-label">*</span></label>
											<input type="email" id="wpforms-3218-field_3" className="wpforms-field-medium wpforms-field-required" name="wpforms[fields][3]" placeholder="email*" required /></div>
											<div id="wpforms-3218-field_26-container" className="wpforms-field wpforms-field-number formField half" data-field-id="26">
											<label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_26">Room Number</label>
											<input type="number" pattern="\d*" id="wpforms-3218-field_26" className="wpforms-field-medium" name="wpforms[fields][26]" placeholder="room number" /></div>
											<div id="wpforms-3218-field_27-container" className="wpforms-field wpforms-field-checkbox formField multiple" data-field-id="27">
											
											<label className="wpforms-field-label" for="wpforms-3218-field_27">reservation for</label>
											<ul id="wpforms-3218-field_27">
												<li className="choice-1 depth-1">
												<input type="checkbox" id="wpforms-3218-field_27_1" name="wpforms[fields][27][]" value="massage"  />
												<label className="wpforms-field-label-inline" for="wpforms-3218-field_27_1">massage</label></li>
												<li className="choice-2 depth-1">
												<input type="checkbox" id="wpforms-3218-field_27_2" name="wpforms[fields][27][]" value="beauty treatment"  />
												<label className="wpforms-field-label-inline" for="wpforms-3218-field_27_2">beauty treatment</label></li>
												<li className="choice-3 depth-1">
												<input type="checkbox" id="wpforms-3218-field_27_3" name="wpforms[fields][27][]" value="fitness room"  />
												<label className="wpforms-field-label-inline" for="wpforms-3218-field_27_3">fitness room</label></li>
												<li className="choice-4 depth-1">
												<input type="checkbox" id="wpforms-3218-field_27_4" name="wpforms[fields][27][]" value="other"  />
												<label className="wpforms-field-label-inline" for="wpforms-3218-field_27_4">other</label></li>
											</ul>
											</div>
											<div id="wpforms-3218-field_13-container" className="wpforms-field wpforms-field-textarea formField right" data-field-id="13">
											<label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_13">Message <span className="wpforms-required-label">*</span></label><textarea id="wpforms-3218-field_13" className="wpforms-field-medium wpforms-field-required" name="wpforms[fields][13]" placeholder="comments" required></textarea></div>
											<div id="wpforms-3218-field_9-container" className="wpforms-field wpforms-field-date-time formField half" data-field-id="9">
											
											<label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_9">Date <span className="wpforms-required-label">*</span></label>
											<div className="wpforms-datepicker-wrap">
											<input type="text" id="wpforms-3218-field_9" className="wpforms-field-date-time-date wpforms-datepicker wpforms-field-required wpforms-field-medium" data-date-format="m/d/Y" data-disable-past-dates="0" data-input="true" name="wpforms[fields][9][date]" placeholder="date*" required /><a title="Clear Date" data-clear className="wpforms-datepicker-clear d-none" ></a></div>
											</div>
											<div id="wpforms-3218-field_17-container" className="wpforms-field wpforms-field-date-time formField half" data-field-id="17">
											<label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_17">Time <span className="wpforms-required-label">*</span></label>
											<input type="text" id="wpforms-3218-field_17-time" className="wpforms-field-date-time-time wpforms-timepicker wpforms-field-required wpforms-field-medium" data-rule-time24h="true" data-time-format="H:i" data-step="30" data-min-time="19:00" data-max-time="22:00" name="wpforms[fields][17][time]" placeholder="time*" required /> 
											</div>
											<div id="wpforms-3218-field_21-container" className="wpforms-field wpforms-field-gdpr-checkbox formField wpforms-field-checkbox" data-field-id="21">
											
											<label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_21">Privacy Policy <span className="wpforms-required-label">*</span></label>
											<ul id="wpforms-3218-field_21" className="wpforms-field-required">
												<li className="choice-1">
												<input type="checkbox" id="wpforms-3218-field_21_1" name="wpforms[fields][21][]" value="I agree to the use of my personal data for the purpose stated above." required />
												<label className="wpforms-field-label-inline" for="wpforms-3218-field_21_1">I agree to the use of my personal data for the purpose stated above. <span className="wpforms-required-label">*</span></label></li>
											</ul>
											</div>
											<div id="wpforms-3218-field_23-container" className="wpforms-field wpforms-field-checkbox formField noMargin" data-field-id="23">
											
											<label className="wpforms-field-label wpforms-label-hide" for="wpforms-3218-field_23">Caselle di Spunta</label>
											<ul id="wpforms-3218-field_23">
												<li className="choice-1 depth-1">
												<input type="checkbox" id="wpforms-3218-field_23_1" name="wpforms[fields][23][]" value="I agree to the use of my personal data to receive news and offers according to my preferences."  />
												<label className="wpforms-field-label-inline" for="wpforms-3218-field_23_1">I agree to the use of my personal data to receive news and offers according to my preferences.</label></li>
											</ul>
											<div className="wpforms-field-description wpforms-disclaimer-description">The personal data provided by filling this form will be processed, mainly in a digital manner, to provide feedback on the information requested. The submission of data is free but leaving mandatory fields empty will inhibits sending the request. The other fields are optional and allow the company to contact you more quickly, to provide a more accurate answer and to elaborate anonymous statistics about their customers and/or potential customers. The data provided will not be disclosed to third parties or spread in any way. Regarding the processing of data, pursuant to art. 7 of Legislative Decree no. 196 of Italian Costitution, you have the right to obtain confirmation of the existence of personal data concerning you, their origin and the logic on which the treatment is based; to obtain cancellation, transformation into anonymous form or block if processed in violation of law; to get update, rectification or integration. To exercise your rights, please contact DIKETO CASANGELINA SRL, Via G Porzio Is E/7, 80143 Napoli.</div>
											</div>
										</div>
										<div className="wpforms-submit-container paddingRyt" style={{paddingRight:' 0'}} >
										<input type="hidden" name="wpforms[id]" value="3218"/>
										<input type="hidden" name="wpforms[author]" value="1" />
										<input type="hidden" name="wpforms[post_id]" value="1541" /><button type="submit" name="wpforms[submit]" className="wpforms-submit oButton bordered" id="wpforms-submit-3218" value="wpforms-submit" aria-live="assertive" data-alt-text="sending..." data-submit-text="send">send</button><img src="../../wp-content/plugins/wpforms/assets/images/submit-spin.svg" className="wpforms-submit-spinner d-none" width="26" height="26" alt="" /></div>
									</form>
								</div>
								</div>
						</div>
					</div>
				</div>
		</aside>
	)
}

export default Booking