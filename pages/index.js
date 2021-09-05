import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const TEST_URL =
	"https://api.openweathermap.org/data/2.5/weather?q=London&appid=";

export default function Home() {
	useEffect(() => {
		axios
			.get(TEST_URL + process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY)
			.then((data) => {
				console.log(data);
			});
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>

				<p className={styles.description}>
					Get started by editing{" "}
					<code className={styles.code}>pages/index.js</code>
				</p>

				<div className={styles.grid}>
					<div className={styles.card}>
						<Link href="/sardorbek" className={styles.card}>
							<h2>Sardorbek Omonkulov &rarr;</h2>
						</Link>
						<p>London</p>
					</div>

					<div className={styles.card}>
						<Link href="/duke">
							<h2>Duke &rarr;</h2>
						</Link>
						<p>Las Vegas</p>
					</div>

					<div className={styles.card}>
						<Link href="/david-blackwelder" className={styles.card}>
							<h2>David Blackwelder &rarr;</h2>
						</Link>
						<p>Charlotte</p>
					</div>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}
