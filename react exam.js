                  // ....REACT EXAM
				  
				  1.   What is react?
				          The React. js framework is an open-source JavaScript framework and library developed by Facebook.
						  It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.
		  
		          2.  What is component?
				  
				          Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
						  Components come in two types, Class components and Function components.
		  
		          3.  Write function syntax.
				        
						   import React from "react"
						   
						   const Abble=()=>{
							   return(
							   <div>
							   </div>
							   )
						   }
						   export default Abble
						   
				  4.  Write class syntax.
				  
							import React, { Component } from "react";							
							
							class Abble extends component{
								render(){
									return(
									<div>
									</div>
									)
								}
							}
							export default Abble
							
							
				 5.  Write example of internal style
				                       
				                const styles={
									 quote: {
												lineHeight: 1.5,
												fontWeight: 300,
												marginBottom: "25px",
												fontSize: "1.375rem"
											  }
								}
				    
				                 function MyComponent(){
									 return (
									 <p style={styles.quote}>
											 I read it daily to improve my skills.
										  </p>
				                   )
								 }
								 
				6.       What is JSX. 
				               JSX stands for JavaScript Syntax Extension. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.
							   
				7.       What are the advantages of react? 
				                 It is simple. SEO friendly. Fast, efficient, and easy to learn. It guarantees stable code
								 Easy Creation of the Dynamic Web Applications
								 
			    8.      Difference between real dom and virtual dom.  
				               Real DOM :
                                 It is an abstraction of a page's HTML.
								 It can manipulate on-screen elements.
								 Any change updates the entire DOM tree.
								 Updating is slow and inefficient. 
								 
							  Virtual DOM :
								It is an abstraction of an HTML DOM.
								It cannot manipulate on-screen elements.
								Any change only updates the relevant node in the tree.
								Updating is fast and efficient.
				              
			    9.      Write any three packages. 
				
				            npm i slick-carousel
							npm i react-icons
							npm i react-sass