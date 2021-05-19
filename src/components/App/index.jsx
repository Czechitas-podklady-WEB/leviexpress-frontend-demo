import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Home } from '../Home'
import { JourneyDetail } from '../JourneyDetail'

export const App = () => (
	<Router>
		<Header />
		<Switch>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/journey/:id" exact>
				<JourneyDetail />
			</Route>
		</Switch>
		<Footer />
	</Router>
)
