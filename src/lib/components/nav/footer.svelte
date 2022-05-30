<script>
	import '../../../assets/styles/nav-footer.scss';
	import FooterLogo from '../../../assets/images/tsu_logo.png';
	import FooterTag from '../../../assets/images/tsus_logo.png';
</script>

<footer>
	<div class="footer-contact">
		<p class="copyright">
			&copy; 2013-<span class="js-replace-date">2016</span> Texas School Safety Center, all rights reserved.
		</p>
		<ul class="social">
			<li>
				<a href="https://twitter.com/TxSchoolSafety"
					><i class="fab fa-twitter" /> <span>Twitter</span></a
				>
			</li>
			<li>
				<a href="https://www.facebook.com/txssc"
					><i class="fab fa-facebook-f" /> <span>Facebook</span></a
				>
			</li>
			<li>
				<a href="https://www.instagram.com/txschoolsafety"
					><i class="fab fa-instagram" /> <span>Instagram</span></a
				>
			</li>
			<li>
				<a href="https://www.linkedin.com/company/texas-school-safety-center"
					><i class="fab fa-linkedin-in" /> <span>LinkedIn</span></a
				>
			</li>
		</ul>

		<ul class="social">
			<li>
				<a href="https://forms.txssc.txstate.edu/contact/join"
					><i class="fas fa-envelope" /> <span>Join Email List</span></a
				>
			</li>
			<li>
				<a href="https://forms.txssc.txstate.edu/contact/us"
					><i class="fas fa-comment" /> <span>Contact Us</span></a
				>
			</li>
			<li><a href="/about"><i class="fas fa-info" /> <span>About</span></a></li>
			<li>
				<a href="https://jobs.hr.txstate.edu/"
					><i class="fas fa-briefcase" /> <span>Careers</span></a
				>
			</li>
		</ul>

		<div class="footer-phone-address">
			<div class="footer-detail">
				<h4>Phone</h4>
				<p>
					Toll Free: 877.304.2727 <br />
					Local: 512.245.8082
				</p>
			</div>

			<div class="footer-detail">
				<h4>Mailing Address</h4>
				<p>
					Texas School Safety Center<br />
					Texas State University<br />
					601 University Drive<br />
					San Marcos, TX 78666
				</p>
			</div>
		</div>
	</div>

	<div class="footer-logo">
		<div class="right no-margin-footer">
			<img src={FooterLogo} alt="texas state university logo in black and white" />
		</div>
		<div>
			<img src={FooterTag} alt="member of the texas state university system" />
		</div>
	</div>
</footer>
