<script lang="ts">
	let { href = '/#', ariaLabel, role, children } = $props();
</script>

<a {href} aria-label={ariaLabel} {role} class="text-base text-text-secondary">
	{@render children?.()}
</a>
