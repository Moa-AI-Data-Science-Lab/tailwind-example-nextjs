import Link from 'next/link';

const Navbar = () => {
	return (
		<div className="flex items-center justify-between w-full p-4 bg-white border-b-2">
			<h1 className="text-2xl font-bold">
				<Link href="/">Note</Link>
			</h1>
			<nav>
				<ul className="flex items-center gap-3">
					<li className="relative">
						<input type="radio" name="menu" id="menu1" className="hidden peer" />
						<label htmlFor="menu1" className="p-2 text-white bg-gray-800 cursor-pointer rounded-md">Title1</label>
						<ul className="absolute hidden p-2 text-white bg-black border rounded-md gap-2 peer-checked:flex top-[30px]">
							<li>
								<a href="/notes">Notes</a>
							</li>
							<li>
								<a href="/notes/new">New Note</a>
							</li>
						</ul>
					</li>
					<li className="relative">
						<input type="radio" name="menu" id="menu2" className="hidden peer" />
						<label htmlFor="menu2" className="p-2 text-white bg-gray-800 cursor-pointer rounded-md">Title1</label>
						<ul className="absolute hidden p-2 text-white bg-black border rounded-md gap-2 peer-checked:flex top-[30px]">
							<li>
								<a href="/notes">Notes2</a>
							</li>
							<li>
								<a href="/notes/new">New Note</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
			<div>
				<button>Login</button>
			</div>
		</div>
	)
}

export default Navbar;
