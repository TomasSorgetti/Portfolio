<script lang="ts">
	import NavLink from './ui/NavLink.svelte';
</script>

<header class="fixed top-0 left-0 w-full">
	<nav class="container mx-auto flex w-full items-center justify-between p-4">
		<a href="/" class="text-2xl">Tomás Sorgetti</a>

		<ul class="flex items-center gap-8">
			<li>
				<NavLink href="/#projects" ariaLabel="Go to projects section" role="navigation"
					>Projects</NavLink
				>
			</li>
			<li>
				<NavLink href="/#about" ariaLabel="Go to About section" role="navigation">About me</NavLink>
			</li>
			<li>
				<NavLink href="/#pricing" ariaLabel="Go to Pricing section" role="navigation">
					Pricing
				</NavLink>
			</li>
			<li>
				<NavLink href="/#templates" ariaLabel="Go to Templates section" role="navigation">
					Templates
				</NavLink>
			</li>
			<li>
				<NavLink href="/#contact" ariaLabel="Go to Contact section" role="navigation">
					Get in touch
				</NavLink>
			</li>
		</ul>
	</nav>
</header>
