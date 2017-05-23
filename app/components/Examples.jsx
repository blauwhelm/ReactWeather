var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are a few example location to try out:</p>
			<ol>
				<li>
					<Link to="/?location=Utrecht">Utrecht</Link>
				</li>
				<li>
					<Link to="/?location=Amsterdam">Amsterdam</Link>
				</li>
			</ol>
		</div>
	)
};

module.exports = Examples;