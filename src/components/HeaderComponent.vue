<script setup>
    import { ref } from 'vue'
    import {
        Dialog,
        DialogPanel,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Popover,
        PopoverButton,
        PopoverGroup,
        PopoverPanel,
    } from '@headlessui/vue'
    import {
        ArrowPathIcon,
        Bars3Icon,
        ChartPieIcon,
        CursorArrowRaysIcon,
        FingerPrintIcon,
        SquaresPlusIcon,
        XMarkIcon,
    } from '@heroicons/vue/24/outline'
    import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

    const products = [
        { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
        { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
        { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
        { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
        { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    ]
    const callsToAction = [
        { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
        { name: 'Contact sales', href: '#', icon: PhoneIcon },
    ]

    const mobileMenuOpen = ref(false)
</script>

<template>
    <header class="bg-neutral">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <a href="#" class="text-sm font-semibold leading-6"> {{ $t('title.portfolio') }}</a>
          <a href="#" class="text-sm font-semibold leading-6"> {{ $t('title.project') }}</a>
        </PopoverGroup>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6">{{ $t('title.login') }} <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
    </header>
</template>